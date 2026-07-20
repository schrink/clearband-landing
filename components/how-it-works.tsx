const steps = [
  {
    number: "01",
    title: "Connect your rig",
    description:
      "Plug in via USB audio or route through a virtual cable like VB-Cable or BlackHole. No drivers, no special hardware.",
  },
  {
    number: "02",
    title: "Choose your processing level",
    description:
      "Fast & Efficient for field laptops and battery operation, or Deep & High Quality for maximum fidelity at home.",
  },
  {
    number: "03",
    title: "Hear the difference",
    description:
      "Noise floor drops instantly. The Dual-View spectrum shows you exactly what was removed in real time.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-border" style={{ backgroundColor: "var(--surface-2)" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>
          How It Works
        </p>
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl text-balance">
          Simple setup, powerful results
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border p-7"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface-1)",
              }}
            >
              <span
                className="block text-4xl font-black leading-none mb-5"
                style={{ color: "rgba(232,160,32,0.25)", fontVariantNumeric: "tabular-nums" }}
              >
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Signal flow diagram */}
        <div
          className="mt-12 rounded-xl border p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-1)" }}
        >
          {/* Input bars */}
          <div className="flex flex-1 flex-col items-center gap-2 w-full">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Input (noisy)</span>
            <div className="flex h-10 w-full items-end justify-center gap-px">
              {[70, 90, 55, 100, 80, 45, 95, 60, 85, 50, 75, 88, 42, 98, 65, 78].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: "rgba(220,60,60,0.65)" }} />
              ))}
            </div>
          </div>

          {/* Arrow + label */}
          <div className="flex flex-col items-center gap-1 px-4">
            <div
              className="rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: "var(--amber)", color: "#0D0900" }}
            >
              AI
            </div>
            <svg width="40" height="12" viewBox="0 0 40 12" className="hidden sm:block">
              <path d="M0 6 H36 M30 1 L38 6 L30 11" stroke="var(--amber)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Output bars */}
          <div className="flex flex-1 flex-col items-center gap-2 w-full">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Output (clean)</span>
            <div className="flex h-10 w-full items-end justify-center gap-px">
              {[40, 55, 38, 60, 52, 35, 58, 42, 55, 38, 50, 57, 32, 62, 45, 53].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: "rgba(50,200,120,0.65)" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
