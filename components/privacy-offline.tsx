import { Lock, Globe2 } from "lucide-react"

const local = [
  "Core DSP & AI noise reduction",
  "Whisper voice transcripts",
  "Callsign extraction",
  "DXCC entity lookups",
  "Your ADIF logbook",
]

const optIn = [
  {
    name: "DX Cluster",
    detail: "Fetches live spots from a cluster you choose. Off until you enable it.",
  },
  {
    name: "QRZ.com Lookup",
    detail: "Sends a callsign to QRZ for name/QTH after you sign in. Off by default.",
  },
]

export function PrivacyOffline() {
  return (
    <section id="privacy" className="py-24 border-t border-border" style={{ backgroundColor: "#0D0900" }}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>
          Truth in Offline
        </p>
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl text-balance">
          What is local, and what is not
        </h2>
        <p className="mt-4 text-center text-sm text-muted-foreground max-w-xl mx-auto">
          We will not pretend the whole app is a black box. Everything that touches your audio and logs
          runs on-device. The only things that reach the internet are optional plugins you switch on yourself.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Local */}
          <div
            className="rounded-xl border p-7"
            style={{ borderColor: "rgba(60,200,120,0.3)", backgroundColor: "rgba(50,180,100,0.05)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Lock className="h-5 w-5" style={{ color: "#3DC87A" }} />
              <h3 className="text-base font-bold text-foreground">Strictly local & private</h3>
            </div>
            <ul className="space-y-3 text-sm text-foreground">
              {local.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span style={{ color: "#3DC87A" }} className="mt-px">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground">
              No cloud, no telemetry, no accounts. This part works with your network cable unplugged.
            </p>
          </div>

          {/* Opt-in internet */}
          <div
            className="rounded-xl border p-7"
            style={{ borderColor: "rgba(120,170,255,0.3)", backgroundColor: "rgba(120,170,255,0.05)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Globe2 className="h-5 w-5" style={{ color: "#7FB0FF" }} />
              <h3 className="text-base font-bold text-foreground">Opt-in, needs the internet</h3>
            </div>
            <ul className="space-y-4">
              {optIn.map((item) => (
                <li key={item.name}>
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground">
              These plugins are disabled out of the box and clearly labelled inside the Lab tab.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
