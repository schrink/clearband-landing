"use client"

import { Zap, BarChart3, SlidersHorizontal, Radio, Settings, Waves } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Real-Time Engine",
    description: "Processed locally with latency as low as 35ms - fast enough to sit in your live receive path.",
  },
  {
    icon: Radio,
    title: "AI Noise Reduction",
    description: "RNNoise and DeepFilterNet crush QRN and hiss. It is the clean feed the rest of the cockpit relies on.",
  },
  {
    icon: BarChart3,
    title: "Dual-View Spectrum",
    description: "Input vs. output waterfall - see exactly what the engine strips away.",
  },
  {
    icon: SlidersHorizontal,
    title: "Wet/Dry Mix",
    description: "Blend raw signal back in to restore presence while keeping noise crushed.",
  },
  {
    icon: Waves,
    title: "Auto-Notch & Spectral Subtraction",
    description: "Kills carriers and broadband hiss before the AI stage for maximum clean gain.",
  },
  {
    icon: Settings,
    title: "Voice Boost EQ",
    description: "Psychoacoustic curve at 2.5 kHz - Heil-style intelligibility lift.",
  },
]

export function FeaturesSection() {
  return (
    <section id="foundation" className="py-24 border-t border-border" style={{ backgroundColor: "#0D0900" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>
          The Foundation
        </p>
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl text-balance">
          A rock-solid audio engine under everything
        </h2>
        <p className="mt-4 text-center text-sm text-muted-foreground max-w-xl mx-auto">
          Great transcription and logging start with a clean signal. ClearBand&apos;s DSP and AI noise
          reduction are the dependable base the plugin cockpit is built on - not the whole story.
        </p>

        <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden border border-border">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 transition-colors"
              style={{ backgroundColor: "var(--surface-1)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--surface-2)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--surface-1)")}
            >
              <feature.icon className="h-5 w-5 mb-4" style={{ color: "var(--amber)" }} />
              <h3 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* AI Models */}
        <div className="mt-20">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>
            Selectable Processing Modes
          </p>
          <h3 className="text-center text-2xl font-bold text-foreground text-balance">
            Choose the right mode for your band
          </h3>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
            {/* Eco Mode */}
            <div
              className="rounded-xl border p-7"
              style={{ borderColor: "rgba(80,200,120,0.3)", backgroundColor: "rgba(50,180,100,0.06)" }}
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#3DC87A" }} />
                <span className="font-mono text-base font-bold" style={{ color: "#3DC87A" }}>10 Meter Audio</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Fast &amp; Efficient · Lightweight Engine</p>
              <ul className="space-y-2 text-sm text-foreground">
                {["Ultra-low CPU usage", "Perfect for field laptops", "Battery-friendly operation", "Aggressive noise gating"].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: "#3DC87A" }} className="mt-px">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio Mode */}
            <div
              className="rounded-xl border p-7"
              style={{ borderColor: "rgba(232,160,32,0.4)", backgroundColor: "rgba(232,160,32,0.07)" }}
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--amber)" }} />
                <span className="font-mono text-base font-bold" style={{ color: "var(--amber)" }}>Deep Band Studio</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Deep &amp; High Quality · Premium Engine</p>
              <ul className="space-y-2 text-sm text-foreground">
                {["High-fidelity reconstruction", 'Restores "air" and highs', "Natural voice preservation", "Best for home stations"].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: "var(--amber)" }} className="mt-px">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
