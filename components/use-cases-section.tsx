const useCases = [
  {
    title: "For DX Chasers",
    description:
      "Pull weak signals out of the mud that are invisible on the waterfall. The AI reconstructs voice harmonics even at S3.",
    image: "/high-end-hf-transceiver-icom-ic-7851-radio-dark-ba.jpg",
    tag: "DX / HF",
  },
  {
    title: "For Contesters",
    description:
      "Reduce ear fatigue across 48-hour runs. The noise floor drops so far you can hear callsigns in the sideband splatter.",
    image: "/contest-station-multiple-monitors-radio-equipment-.jpg",
    tag: "Contesting",
  },
  {
    title: "For POTA / SOTA",
    description:
      'Eco Mode sips just 3% CPU - runs all day on a field laptop. Pack light, hear everything.',
    image: "/portable-ham-radio-qrp-setup-outdoor-nature-mounta.jpg",
    tag: "Portable Ops",
  },
]

export function UseCasesSection() {
  return (
    <section className="py-24 border-t border-border" style={{ backgroundColor: "var(--surface-2)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>
          Use Cases
        </p>
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl text-balance">
          Whether you&apos;re at home or in the field
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group overflow-hidden rounded-xl border"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-1)" }}
            >
              {/* Gear image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--surface-1) 0%, transparent 60%)" }} />
                <span
                  className="absolute top-3 left-3 rounded px-2 py-0.5 text-xs font-bold uppercase tracking-widest"
                  style={{ backgroundColor: "rgba(232,160,32,0.15)", color: "var(--amber)", border: "1px solid rgba(232,160,32,0.3)" }}
                >
                  {useCase.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
