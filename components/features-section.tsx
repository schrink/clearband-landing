import { Zap, FileText, BarChart3, SlidersHorizontal, Shield, Radio, Settings, Waves } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Zero-Cloud Latency",
    description: "Processed locally on your machine. Latency as low as 35ms. No data is ever sent to a server.",
  },
  {
    icon: FileText,
    title: "AI Log Assistant",
    description:
      "Integrated OpenAI Whisper running locally. Automatically transcribes callsigns in real-time during pileups.",
  },
  {
    icon: BarChart3,
    title: "Dual-View Spectrum",
    description: "Real-time visualization showing Input vs. Output. See exactly what the AI is removing.",
  },
  {
    icon: SlidersHorizontal,
    title: 'The "Wet/Dry" Mix',
    description: "Blend raw signal back in to restore presence while keeping the noise floor crushed.",
  },
  {
    icon: Radio,
    title: "Auto-Notch Filter",
    description: "Instantly kills feedback tuners, carriers, and heterodynes without manual intervention.",
  },
  {
    icon: Waves,
    title: "Spectral Subtraction",
    description: "Lowers broadband hiss floor by 6-10dB before AI processing for maximum clarity.",
  },
  {
    icon: Settings,
    title: "Voice Boost EQ",
    description: "Psychoacoustic curve similar to Heil HC-4 that punches up 2.5kHz for intelligibility.",
  },
  {
    icon: Shield,
    title: "100% Offline",
    description: "Your audio stays in your shack. No cloud processing, no data collection, complete privacy.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-t border-border/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Key Features</h2>
          <p className="mt-4 text-lg text-muted-foreground">Engineered for the Modern Shack</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-amber-500/30 hover:bg-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 transition-colors group-hover:bg-amber-500/20">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* AI Models Section */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-foreground">Selectable AI Models</h3>
          <p className="mt-2 text-center text-muted-foreground">Choose the right tool for your band conditions</p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
            {/* Eco Mode */}
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-emerald-500" />
                <span className="font-mono text-lg font-semibold text-emerald-500">Eco Mode</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">RNNoise Engine</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                <li>• Ultra-low CPU usage</li>
                <li>• Perfect for field laptops</li>
                <li>• Battery-friendly operation</li>
                <li>• Aggressive noise gating</li>
              </ul>
            </div>

            {/* Studio Mode */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-amber-500" />
                <span className="font-mono text-lg font-semibold text-amber-500">Studio Mode</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">DeepFilterNet Engine</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                <li>• High-fidelity reconstruction</li>
                <li>• Restores "air" and highs</li>
                <li>• Natural voice preservation</li>
                <li>• Best for home stations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
