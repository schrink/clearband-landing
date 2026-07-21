"use client"

import { useWaitlist } from "@/components/waitlist-context"

export function HeroSection() {
  const { openWaitlist } = useWaitlist()

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
        {/* Eyebrow */}
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "var(--amber)" }}>
          The Amateur Radio AI Cockpit
        </p>

        {/* Headline / tagline */}
        <h1 className="text-center text-balance font-bold leading-tight text-foreground" style={{ fontSize: "clamp(2.25rem, 5.2vw, 4rem)" }}>
          Hear what you&apos;ve been missing.
          <br />
          <span className="text-foreground/90">Understand who is calling.</span>
          <br />
          <em className="not-italic font-bold" style={{ color: "var(--amber)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            Log it automatically.
          </em>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          ClearBand is a complete AI cockpit for the modern shack - a real-time audio engine with a
          plugin ecosystem that <strong className="text-foreground font-medium">transcribes, identifies, and logs</strong> every
          contact. Studio-grade noise reduction is just the foundation.
        </p>

        {/* Trust line */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-0">
          {["Core DSP runs offline", "Transcripts stay local", "No subscriptions"].map((item, i) => (
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

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={openWaitlist}
            className="rounded px-8 py-3 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--amber)", color: "#0D0900" }}
          >
            Start Free Trial
          </button>
          <a
            href="#workflow"
            className="rounded border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/50"
            style={{ borderColor: "var(--border)" }}
          >
            See the Workflow
          </a>
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Windows &nbsp;·&nbsp; macOS &nbsp;·&nbsp; Linux &nbsp;·&nbsp; 15-day free trial
        </p>

        {/* App Screenshot */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div
            className="overflow-hidden rounded-xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <img
              src="/images/image.png"
              alt="ClearBand AI Lab - plugin workspace showing the transcription, callsign extraction and auto-logbook pipeline alongside the audio engine"
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
