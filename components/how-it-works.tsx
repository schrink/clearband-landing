import { AudioWaveform, Cpu, Volume2 } from "lucide-react"

const steps = [
  {
    icon: AudioWaveform,
    title: "Input",
    description: "Raw audio from your radio via USB or virtual cable",
  },
  {
    icon: Cpu,
    title: "Process",
    description: "Hybrid DSP + AI neural network processing",
  },
  {
    icon: Volume2,
    title: "Output",
    description: "Crystal-clear audio to your speakers or headphones",
  },
]

export function HowItWorks() {
  return (
    <section className="border-t border-border/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">Simple setup, powerful results</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-1/2 hidden h-0.5 w-full bg-gradient-to-r from-amber-500/50 to-amber-500/10 md:block" />
              )}

              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 ring-1 ring-amber-500/30">
                <step.icon className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Waveform visualization */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="flex items-center justify-between gap-4 rounded-xl border border-border/50 bg-card/50 p-6">
            <div className="flex flex-1 flex-col items-center">
              <span className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Input</span>
              <div className="flex h-12 w-full items-center justify-center gap-0.5">
                {[...Array(32)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full bg-red-500/70"
                    style={{ height: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500">
              <Cpu className="h-4 w-4 text-background" />
            </div>
            <div className="flex flex-1 flex-col items-center">
              <span className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Output</span>
              <div className="flex h-12 w-full items-center justify-center gap-0.5">
                {[...Array(32)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full bg-emerald-500/70"
                    style={{ height: `${Math.random() * 60 + 10}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
