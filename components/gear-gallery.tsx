const gear = [
  {
    src: "/yaesu-ftdx101d-hf-transceiver-radio-front-panel-da.jpg",
    alt: "Yaesu FTDX101D HF transceiver",
    name: "Yaesu FTDX101D",
    note: "Any HF Transceiver",
  },
  {
    src: "/icom-ic-7300-ham-radio-transceiver-waterfall-displ.jpg",
    alt: "ICOM IC-7300 with built-in waterfall display",
    name: "ICOM IC-7300",
    note: "SDR or Traditional",
  },
  {
    src: "/elecraft-k4-high-performance-amateur-radio-dark-ba.jpg",
    alt: "Elecraft K4 high-performance amateur radio",
    name: "Elecraft K4",
    note: "Contest Grade",
  },
]

const brands = ["ICOM", "Yaesu", "Kenwood", "Elecraft", "FlexRadio", "Xiegu", "any rig with audio I/O"]

export function GearGallery() {
  return (
    <section className="py-24 border-t border-border overflow-hidden" style={{ backgroundColor: "#0D0900" }}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>
          Compatibility
        </p>
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl text-balance">
          Any transceiver, any band
        </h2>
        <p className="mt-4 text-center text-sm text-muted-foreground max-w-md mx-auto">
          Virtual audio cable integration means ClearBand AI slots into any shack without additional hardware.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {gear.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(13,9,0,0.92) 0%, transparent 55%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-bold text-foreground leading-tight">{item.name}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--amber)" }}>{item.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Brand ticker */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {brands.map((b, i) => (
            <span key={b} className="text-xs text-muted-foreground flex items-center gap-2">
              {i > 0 && <span style={{ color: "var(--border)" }}>·</span>}
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
