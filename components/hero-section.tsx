"use client"

import { Loader2, CheckCircle2 } from "lucide-react"
import { useState, FormEvent } from "react"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "ok" | "error">("idle")

  const handleWaitlist = async (e: FormEvent) => {
    e.preventDefault()
    setSubStatus("loading")
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setSubStatus("ok")
        setEmail("")
      } else {
        setSubStatus("error")
      }
    } catch {
      setSubStatus("error")
    }
  }

  return (
    <section className="relative overflow-hidden pt-28 pb-24" style={{ backgroundColor: "#0D0900" }}>
      {/* Subtle radial amber glow behind headline */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: 700,
          height: 400,
          background: "radial-gradient(ellipse at center, rgba(232,160,32,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Trust line */}
        <div className="mb-8 flex items-center justify-center gap-0">
          {["No Subscriptions", "No Cloud", "100% Offline"].map((item, i) => (
            <span key={item} className="flex items-center">
              {i > 0 && (
                <span className="mx-3 h-3 w-px block" style={{ backgroundColor: "rgba(232,160,32,0.3)" }} />
              )}
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--amber)" }}
              >
                {item}
              </span>
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="text-center text-balance font-bold leading-tight text-foreground" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          Hear the signal,
          <br />
          <em className="not-italic font-bold" style={{ color: "var(--amber)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            ignore the QRN.
          </em>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          The first&nbsp;<strong className="text-foreground font-medium">Hybrid&nbsp;Chain</strong> audio processor
          for Amateur Radio. Studio-grade noise reduction, local AI transcription, and surgical DSP—running entirely on your PC.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="rounded px-8 py-3 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--amber)", color: "#0D0900" }}
          >
            Start Free Trial
          </a>
          <a
            href="#how-it-works"
            className="rounded border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/50"
            style={{ borderColor: "var(--border)" }}
          >
            Learn More
          </a>
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Windows &nbsp;·&nbsp; macOS &nbsp;·&nbsp; Linux &nbsp;·&nbsp; 15-day free trial
        </p>

        {/* Waitlist Email Capture */}
        <div className="mt-8">
          <form onSubmit={handleWaitlist} className="mx-auto flex max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your email for early access"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setSubStatus("idle") }}
              required
              className="flex-1 rounded border bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              style={{ borderColor: "var(--border)" }}
            />
            <button
              type="submit"
              disabled={subStatus === "loading" || subStatus === "ok"}
              className="rounded px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90 disabled:opacity-70"
              style={{ backgroundColor: "var(--amber)", color: "#0D0900" }}
            >
              {subStatus === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : subStatus === "ok" ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                "Join Waitlist"
              )}
            </button>
          </form>
          {subStatus === "ok" && (
            <p className="mt-2 text-center text-sm text-emerald-400">
              ✓ You're on the list! We'll notify you when ClearBand launches.
            </p>
          )}
          {subStatus === "error" && (
            <p className="mt-2 text-center text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        {/* App Screenshot */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div
            className="overflow-hidden rounded-xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <img
              src="/images/image.png"
              alt="ClearBand AI interface — real-time spectrum analyzer, I/O routing, AI processing dial and output controls"
              className="w-full block"
            />
          </div>
          {/* Amber glow under screenshot */}
          <div
            className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2"
            style={{
              width: "80%",
              height: 120,
              background: "radial-gradient(ellipse at center, rgba(232,160,32,0.18) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        </div>
      </div>
    </section>
  )
}
