"use client"

import { useWaitlist } from "@/components/waitlist-context"

const coreFeatures = [
  "Two AI noise-reduction engines (RNNoise + DeepFilterNet)",
  "Full DSP pipeline: ANF, spectral subtraction, voice EQ, WDRC",
  "Dual-view spectrum analyzer",
  "Cross-platform: Windows, macOS, Linux",
  "100% offline, no cloud, no telemetry",
  "Free updates for life",
]

const proFeatures = [
  "Everything in Core",
  "Local Whisper offline transcription",
  "Real-time callsign extraction from audio",
  "Offline DXCC callsign resolution",
  "Auto-logbook with ADIF export",
  "Station info overlay",
  "Priority email support",
]

export function PricingSection() {
  const { openWaitlist } = useWaitlist()

  return (
    <section id="pricing" className="py-24 border-t border-border" style={{ backgroundColor: "#0D0900" }}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>
          Pricing
        </p>
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl text-balance">
          Listen. Understand. Log.
        </h2>
        <p className="mt-4 text-center text-sm text-muted-foreground max-w-lg mx-auto">
          AI noise reduction is free for everyone. The Pro Bundle unlocks the intelligence layer
          that transcribes, identifies, and logs your QSOs.
        </p>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
          {/* Core (Free) */}
          <div
            className="relative rounded-2xl border overflow-hidden"
            style={{ borderColor: "rgba(60,200,120,0.3)", backgroundColor: "var(--surface-1)" }}
          >
            <div className="relative p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Core
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-1">Free</h3>
              <p className="text-xs text-muted-foreground mb-6" style={{ color: "#3DC87A" }}>
                Forever. No credit card.
              </p>

              <ul className="space-y-3 mb-8">
                {coreFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="flex-shrink-0 mt-px">
                      <circle cx="8" cy="8" r="7" fill="rgba(60,200,120,0.15)" stroke="rgba(60,200,120,0.5)" strokeWidth="1" />
                      <path d="M5 8l2 2 4-4" stroke="#3DC87A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="block w-full rounded-lg py-3 text-center text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
                style={{ border: "1px solid rgba(60,200,120,0.3)", color: "#3DC87A" }}
                onClick={(e) => { e.preventDefault(); openWaitlist(); }}
              >
                Download Free Core
              </a>
            </div>
          </div>

          {/* Pro Bundle */}
          <div
            className="relative rounded-2xl border-2 overflow-hidden"
            style={{ borderColor: "var(--amber)", backgroundColor: "var(--surface-1)" }}
          >
            {/* Amber glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(232,160,32,0.10) 0%, transparent 65%)" }}
            />

            {/* Badge */}
            <div
              className="absolute top-0 right-0 px-4 py-1 text-xs font-black uppercase tracking-widest rounded-bl-xl"
              style={{ backgroundColor: "var(--amber)", color: "#0D0900" }}
            >
              One-Time Buy
            </div>

            <div className="relative p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Pro Bundle</p>

              {/* Price */}
              <div className="flex items-end gap-3 mb-1">
                <span className="text-7xl font-black text-foreground leading-none" style={{ letterSpacing: "-0.03em" }}>
                  $49
                </span>
                <span className="text-sm text-muted-foreground pb-2">one-time payment</span>
              </div>
              <p className="text-xs font-semibold mb-8" style={{ color: "var(--amber)" }}>
                Includes 15-day free trial &nbsp;·&nbsp; No credit card required
              </p>

              {/* Feature list */}
              <ul className="space-y-3 mb-8">
                {proFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="flex-shrink-0 mt-px">
                      <circle cx="8" cy="8" r="7" fill="rgba(232,160,32,0.15)" stroke="rgba(232,160,32,0.5)" strokeWidth="1" />
                      <path d="M5 8l2 2 4-4" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                type="button"
                onClick={openWaitlist}
                className="block w-full rounded-lg py-4 text-center text-sm font-black uppercase tracking-widest transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--amber)", color: "#0D0900" }}
              >
                Start Free Trial
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Waitlist members lock in <span style={{ color: "var(--amber)" }}>$29 founding price</span>
              </p>
            </div>
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-muted-foreground">
          {["No Subscriptions", "100% Offline", "Instant Download", "30-Day Guarantee"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span style={{ color: "#3DC87A" }}>✓</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}