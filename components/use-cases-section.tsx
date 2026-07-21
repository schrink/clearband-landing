const useCases = [
  {
    title: "For DX Chasers",
    description:
      "Hear weak callers the waterfall hides, then let the transcript catch the callsign and resolve the DXCC entity before you even key up.",
    image: "/high-end-hf-transceiver-icom-ic-7851-radio-dark-ba.jpg",
    tag: "DX / HF",
  },
  {
    title: "For Contesters",
    description:
      "Keep both hands on the run. Callsigns are transcribed and pushed to your log automatically, so a 48-hour marathon stays fast and accurate.",
    image: "/contest-station-multiple-monitors-radio-equipment-.jpg",
    tag: "Contesting",
  },
  {
    title: "For POTA / SOTA",
    description:
      "A lightweight engine and a local logbook run all day on a field laptop - no signal on the trail needed to keep a clean, complete log.",
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
          Built for operators who run a complete workflow
        </h2>
        <p className="mt-4 text-center text-sm text-muted-foreground max-w-xl mx-auto">
          Not just an audio cable patch. ClearBand is for serious operators who want the whole loop -
          hear, understand, and log - handled in one place.
        </p>

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
