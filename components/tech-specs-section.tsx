const specGroups = [
  {
    title: "Operating Systems",
    items: ["Windows 10 / 11 (x64)", "macOS 12+ (M1/M2 native)", "Ubuntu 20.04+ / Debian"],
  },
  {
    title: "Audio I/O",
    items: ["USB audio codec (ICOM, Yaesu, Kenwood)", "VB-Cable / BlackHole virtual cables", "ASIO / CoreAudio / ALSA"],
  },
  {
    title: "Tested Transceivers",
    items: ["ICOM IC-7300, IC-7610, IC-7851", "Yaesu FTDX101D, FT-991A", "Kenwood TS-590S, TS-890S", "Elecraft K3S, K4", "Any rig with audio output"],
  },
  {
    title: "Hardware Requirements",
    items: ["CPU: Intel i3 / Ryzen 3 (2018+)", "RAM: 4 GB minimum", "Storage: 600 MB for models", "GPU: Not required"],
  },
]

export function TechSpecsSection() {
  return (
    <section id="specs" className="py-24 border-t border-border" style={{ backgroundColor: "var(--surface-2)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>
          Technical Specs
        </p>
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl text-balance">
          Compatible with your existing setup
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border p-6"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-1)" }}
            >
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Privacy note */}
        <div
          className="mt-10 rounded-xl border p-6 text-center"
          style={{ borderColor: "rgba(60,200,100,0.25)", backgroundColor: "rgba(50,180,90,0.05)" }}
        >
          <p className="text-sm font-semibold text-foreground mb-1">Privacy First — 100% Local Processing</p>
          <p className="text-xs text-muted-foreground max-w-lg mx-auto">
            ClearBand AI does not collect audio data. Every byte of your signal stays on your machine. No telemetry, no accounts, no cloud.
          </p>
        </div>
      </div>
    </section>
  )
}
