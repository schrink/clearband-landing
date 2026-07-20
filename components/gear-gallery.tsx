export function GearGallery() {
  const gearImages = [
    {
      src: "/yaesu-ftdx101d-hf-transceiver-radio-front-panel-da.jpg",
      alt: "Yaesu FTDX101D",
      caption: "Works with any HF Transceiver",
    },
    {
      src: "/icom-ic-7300-ham-radio-transceiver-waterfall-displ.jpg",
      alt: "ICOM IC-7300",
      caption: "SDR or Traditional",
    },
    {
      src: "/elecraft-k4-high-performance-amateur-radio-dark-ba.jpg",
      alt: "Elecraft K4",
      caption: "Contest Grade Performance",
    },
  ]

  return (
    <section className="border-t border-border/40 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Works With Your Rig</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Virtual audio cable integration means ClearBand AI works with any transceiver
          </p>
        </div>

        {/* Gear showcase */}
        <div className="grid gap-6 md:grid-cols-3">
          {gearImages.map((gear, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl border border-border/50 bg-card">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={gear.src || "/placeholder.svg"}
                  alt={gear.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-medium text-amber-500">{gear.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Supported radios list */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Compatible with ICOM, Yaesu, Kenwood, Elecraft, FlexRadio, and any rig with audio I/O
          </p>
        </div>
      </div>
    </section>
  )
}
