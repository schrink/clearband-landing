import { NextRequest, NextResponse } from "next/server"
import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"
import { Resend } from "resend"

const redis = Redis.fromEnv()
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "60 s"),
  analytics: true,
})

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function notifySignup(email: string) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set - skipping waitlist email notify")
    return
  }

  const to = process.env.WAITLIST_NOTIFY_EMAIL || "contact@clearbandai.app"
  const from =
    process.env.WAITLIST_FROM_EMAIL || "ClearBand Waitlist <onboarding@resend.dev>"

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from,
    to: [to],
    subject: `New waitlist signup: ${email}`,
    replyTo: email,
    text: [
      "New ClearBand AI waitlist signup",
      "",
      `Email: ${email}`,
      `Offer: $19 founding lifetime price`,
      `Time: ${new Date().toISOString()}`,
      "",
      "Stored in Upstash Redis hash: waitlist:emails",
    ].join("\n"),
    html: `
      <div style="font-family:Georgia,serif;background:#0D0900;color:#F2ECD8;padding:32px">
        <p style="color:#E8A020;font-size:12px;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 12px">ClearBand AI</p>
        <h1 style="font-size:24px;margin:0 0 16px">New waitlist signup</h1>
        <p style="margin:0 0 8px"><strong>Email:</strong> <a href="mailto:${email}" style="color:#E8A020">${email}</a></p>
        <p style="margin:0 0 8px"><strong>Offer:</strong> $19 founding lifetime price</p>
        <p style="margin:0;color:#8A7A56;font-size:13px">${new Date().toISOString()}</p>
      </div>
    `,
  })

  if (error) {
    console.error("Waitlist notify email failed:", error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown"
    const { success } = await ratelimit.limit(ip)
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const email = (body.email ?? "").trim().toLowerCase()

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 })
    }

    const existing = await redis.hget("waitlist:emails", email)
    if (existing) {
      return NextResponse.json({ message: "already_registered" })
    }

    await redis.hset("waitlist:emails", { [email]: Date.now() })

    // Fire-and-forget notify - don't fail the signup if email breaks
    void notifySignup(email).catch((err) => {
      console.error("Waitlist notify error:", err)
    })

    return NextResponse.json({ message: "registered" })
  } catch (error) {
    console.error("Waitlist error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const count = await redis.hlen("waitlist:emails")
    return NextResponse.json({ count })
  } catch (error) {
    console.error("Waitlist count error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
