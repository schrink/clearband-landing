"use client"

import { useWaitlist } from "@/components/waitlist-context"

export function SocialProof() {
  const { openWaitlist } = useWaitlist()

  return (
    <section
      className="py-24 border-t border-border relative overflow-hidden"
      style={{ backgroundColor: "var(--surface-2)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/professional-amateur-radio-shack-multiple-monitors.jpg"
          alt=""
          className="h-full w-full object-cover"
          style={{ opacity: 0.04 }}
        />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: "var(--amber)" }}
        >
          From the shack
        </p>
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
          Real operator stories coming soon
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          We&apos;re collecting notes from early testers once the trial opens.
          Join the waitlist and you&apos;ll be among the first to try ClearBand AI
          and lock in the founding price.
        </p>
        <button
          type="button"
          onClick={openWaitlist}
          className="mt-8 rounded px-8 py-3 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--amber)", color: "#0D0900" }}
        >
          Join the Waitlist
        </button>
      </div>
    </section>
  )
}
