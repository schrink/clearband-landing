"use client"

import { FileText, ScanSearch, BookMarked, Globe2, Radio, Wifi } from "lucide-react"

const plugins = [
  {
    icon: FileText,
    title: "Whisper Transcription",
    description: "A local Whisper model captures every over as searchable text - no cloud, no upload.",
    connectivity: "local",
  },
  {
    icon: ScanSearch,
    title: "Callsign Extraction",
    description: "Pulls callsigns out of the live transcript so you never miss one in a pile-up.",
    connectivity: "local",
  },
  {
    icon: BookMarked,
    title: "Auto Logbook (ADIF)",
    description: "Writes each contact straight to your log with time, band, and mode already filled in.",
    connectivity: "local",
  },
  {
    icon: Globe2,
    title: "DXCC Lookup",
    description: "Resolves the country/entity for any callsign from an on-device database.",
    connectivity: "local",
  },
  {
    icon: Radio,
    title: "DX Cluster",
    description: "Cross-references live spots to prioritize the calls worth chasing.",
    connectivity: "internet",
  },
  {
    icon: Wifi,
    title: "QRZ.com Lookup",
    description: "Optionally enrich a logged contact with name and QTH from your QRZ account.",
    connectivity: "internet",
  },
]

export function PluginEcosystem() {
  return (
    <section id="plugins" className="py-24 border-t border-border" style={{ backgroundColor: "#0D0900" }}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>
          The Plugin Ecosystem
        </p>
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl text-balance">
          Build your cockpit in the <em style={{ color: "var(--amber)", fontFamily: "Georgia, serif" }}>Lab</em>
        </h2>
        <p className="mt-4 text-center text-sm text-muted-foreground max-w-xl mx-auto">
          The Lab tab is where ClearBand becomes more than a filter. Snap plugins into the signal chain
          to transcribe, identify, and log every contact - and switch anything you do not need off.
        </p>

        {/* Lab tab showcase */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-xl border" style={{ borderColor: "var(--border)" }}>
            <div
              className="flex items-center gap-2 border-b px-4 py-2.5"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-2)" }}
            >
              {["Mixer", "Spectrum", "Lab"].map((tab) => (
                <span
                  key={tab}
                  className="rounded px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                  style={
                    tab === "Lab"
                      ? { backgroundColor: "rgba(232,160,32,0.15)", color: "var(--amber)", border: "1px solid rgba(232,160,32,0.35)" }
                      : { color: "var(--muted-foreground)" }
                  }
                >
                  {tab}
                </span>
              ))}
            </div>
            <img
              src="/images/image.png"
              alt="ClearBand Lab tab - the plugin workspace showing live transcription, callsign extraction and the auto-logbook feed"
              className="w-full block"
            />
          </div>
          <div
            className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2"
            style={{
              width: "80%",
              height: 120,
              background: "radial-gradient(ellipse at center, rgba(232,160,32,0.16) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        </div>

        {/* Plugin cards */}
        <div className="mt-20 grid gap-px sm:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden border border-border">
          {plugins.map((plugin) => (
            <div
              key={plugin.title}
              className="group p-6 transition-colors"
              style={{ backgroundColor: "var(--surface-1)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--surface-2)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--surface-1)")}
            >
              <div className="flex items-center justify-between mb-4">
                <plugin.icon className="h-5 w-5" style={{ color: "var(--amber)" }} />
                {plugin.connectivity === "local" ? (
                  <span
                    className="rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                    style={{ backgroundColor: "rgba(60,200,120,0.12)", color: "#3DC87A", border: "1px solid rgba(60,200,120,0.3)" }}
                  >
                    Local & Private
                  </span>
                ) : (
                  <span
                    className="rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                    style={{ backgroundColor: "rgba(120,170,255,0.12)", color: "#7FB0FF", border: "1px solid rgba(120,170,255,0.35)" }}
                  >
                    Opt-in · Internet
                  </span>
                )}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{plugin.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{plugin.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground max-w-lg mx-auto">
          Plugins marked <span style={{ color: "#7FB0FF" }}>Opt-in · Internet</span> are disabled by default and
          only reach the network after you turn them on and sign in.
        </p>
      </div>
    </section>
  )
}
