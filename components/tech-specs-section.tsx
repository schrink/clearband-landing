import { Monitor, Cpu, Radio } from "lucide-react"

const specs = [
  {
    icon: Monitor,
    title: "System Requirements",
    items: ["Windows 10/11", "macOS (M1/M2 recommended)", "Linux"],
  },
  {
    icon: Radio,
    title: "Audio Support",
    items: ["USB Audio Codec (Icom, Yaesu, Kenwood)", "Virtual Audio Cables", "VB-Cable / BlackHole support"],
  },
  {
    icon: Cpu,
    title: "Supported Radios",
    items: ["Icom 7300, 7610, 7851", "Yaesu FTDX series", "Kenwood TS-590, TS-890", "Any radio with audio output"],
  },
]

export function TechSpecsSection() {
  return (
    <section id="specs" className="border-t border-border/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Technical Specifications</h2>
          <p className="mt-4 text-lg text-muted-foreground">Compatible with your existing setup</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {specs.map((spec) => (
            <div key={spec.title} className="rounded-xl border border-border/50 bg-card/50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <spec.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{spec.title}</h3>
              <ul className="mt-4 space-y-2">
                {spec.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Privacy Note */}
        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-center">
          <p className="font-semibold text-foreground">🔒 Privacy First</p>
          <p className="mt-2 text-sm text-muted-foreground">
            We do not collect audio data. All processing happens locally on your machine. Your QSOs stay private.
          </p>
        </div>
      </div>
    </section>
  )
}
