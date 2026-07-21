const steps = [
  {
    number: "01",
    title: "Clean the audio",
    description:
      "The foundational DSP + AI noise reduction stage strips QRN, hiss, and heterodynes so both you and the transcriber get a clear signal.",
    local: true,
  },
  {
    number: "02",
    title: "Transcribe locally",
    description:
      "A local Whisper model turns the cleaned audio into text in real time. Nothing is uploaded - the transcript never leaves your machine.",
    local: true,
  },
  {
    number: "03",
    title: "Extract the callsign",
    description:
      "ClearBand parses callsigns out of the live transcript and resolves the entity with an on-device DXCC lookup - no internet required.",
    local: true,
  },
  {
    number: "04",
    title: "Log it automatically",
    description:
      "The contact is written straight to your logbook (ADIF). Enable optional online plugins to enrich it with QRZ.com or DX Cluster data.",
    local: true,
  },
]

const flow = [
  { label: "Audio", tone: "amber" },
  { label: "Whisper Transcription", tone: "muted" },
  { label: "Callsign Extraction", tone: "muted" },
  { label: "Auto Logbook", tone: "green" },
]

export function HowItWorks() {
  return (
    <section id="workflow" className="py-24 border-t border-border" style={{ backgroundColor: "var(--surface-2)" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>
          The Workflow
        </p>
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl text-balance">
          From raw audio to a logged contact
        </h2>
        <p className="mt-4 text-center text-sm text-muted-foreground max-w-xl mx-auto">
          ClearBand does not stop at cleaner audio. It runs a full pipeline that hears the signal,
          understands who is calling, and files the QSO for you - all on your own PC.
        </p>

        {/* Signal flow diagram */}
        <div
          className="mt-14 rounded-xl border p-6"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-1)" }}
        >
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            {flow.map((node, i) => (
              <div key={node.label} className="flex flex-1 flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <span
                  className="rounded-lg border px-4 py-3 text-center text-sm font-semibold w-full sm:w-auto"
                  style={{
                    borderColor:
                      node.tone === "green"
                        ? "rgba(60,200,120,0.4)"
                        : node.tone === "amber"
                        ? "rgba(232,160,32,0.4)"
                        : "var(--border)",
                    color:
                      node.tone === "green"
                        ? "#3DC87A"
                        : node.tone === "amber"
                        ? "var(--amber)"
                        : "var(--foreground)",
                    backgroundColor:
                      node.tone === "green"
                        ? "rgba(50,180,100,0.06)"
                        : node.tone === "amber"
                        ? "rgba(232,160,32,0.06)"
                        : "var(--surface-2)",
                  }}
                >
                  {node.label}
                </span>
                {i < flow.length - 1 && (
                  <span className="text-lg leading-none" style={{ color: "var(--amber)" }}>
                    <span className="hidden sm:inline">&rarr;</span>
                    <span className="sm:hidden">&darr;</span>
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Every stage above runs locally. DX Cluster and QRZ.com enrichment are optional, opt-in add-ons.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border p-7"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface-1)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="block text-4xl font-black leading-none"
                  style={{ color: "rgba(232,160,32,0.25)", fontVariantNumeric: "tabular-nums" }}
                >
                  {step.number}
                </span>
                {step.local && (
                  <span
                    className="rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                    style={{ backgroundColor: "rgba(60,200,120,0.12)", color: "#3DC87A", border: "1px solid rgba(60,200,120,0.3)" }}
                  >
                    Local
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
