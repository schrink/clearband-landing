import { Globe, Trophy, Mountain } from "lucide-react"

const useCases = [
  {
    icon: Globe,
    title: "For DX Chasers",
    description: "Pull weak signals out of the mud that are invisible on the waterfall.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    image: "/high-end-hf-transceiver-icom-ic-7851-radio-dark-ba.jpg",
  },
  {
    icon: Trophy,
    title: "For Contesters",
    description: "Reduce brain fatigue. Listen for hours without the constant hiss of the noise floor.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    image: "/contest-station-multiple-monitors-radio-equipment-.jpg",
  },
  {
    icon: Mountain,
    title: "For POTA/SOTA",
    description: '"Eco Mode" runs efficiently on older laptops, extending your battery life in the field.',
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    image: "/portable-ham-radio-qrp-setup-outdoor-nature-mounta.jpg",
  },
]

export function UseCasesSection() {
  return (
    <section className="border-t border-border/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Built For Operators</h2>
          <p className="mt-4 text-lg text-muted-foreground">Whether you&apos;re at home or in the field</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className={`group overflow-hidden rounded-xl border ${useCase.border} bg-card transition-all hover:border-amber-500/50`}
            >
              {/* Gear image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={useCase.image || "/placeholder.svg"}
                  alt={useCase.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div
                  className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl ${useCase.bg} ${useCase.color}`}
                >
                  <useCase.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
                <p className="mt-2 text-muted-foreground">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
