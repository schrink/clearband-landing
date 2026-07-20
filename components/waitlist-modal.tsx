"use client"

import { useEffect, useId, useRef, useState, type FormEvent } from "react"
import { CheckCircle2, Loader2, Radio, X } from "lucide-react"
import { useWaitlist } from "@/components/waitlist-context"

type Status = "idle" | "loading" | "ok" | "exists" | "error"

export function WaitlistModal() {
  const { open, closeWaitlist } = useWaitlist()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const titleId = useId()

  useEffect(() => {
    if (!open) return

    setEmail("")
    setStatus("idle")
    setErrorMsg("")
    const t = requestAnimationFrame(() => inputRef.current?.focus())
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeWaitlist()
    }
    window.addEventListener("keydown", onKey)

    return () => {
      cancelAnimationFrame(t)
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [open, closeWaitlist])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setStatus(data.message === "already_registered" ? "exists" : "ok")
        setEmail("")
      } else {
        setStatus("error")
        setErrorMsg(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setErrorMsg("Something went wrong. Please try again.")
    }
  }

  if (!open) return null

  const done = status === "ok" || status === "exists"

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="presentation">
      <button
        type="button"
        aria-label="Close waitlist dialog"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={closeWaitlist}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-md overflow-hidden rounded-2xl border shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        style={{
          backgroundColor: "var(--surface-1)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(232,160,32,0.14) 0%, transparent 60%)",
          }}
        />

        <button
          type="button"
          onClick={closeWaitlist}
          className="absolute right-3 top-3 z-10 rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative px-7 pb-7 pt-8">
          <div
            className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border"
            style={{ borderColor: "rgba(232,160,32,0.35)", backgroundColor: "rgba(232,160,32,0.1)" }}
          >
            <Radio className="h-5 w-5" style={{ color: "var(--amber)" }} />
          </div>

          {done ? (
            <div className="text-center">
              <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-emerald-400" />
              <h2 id={titleId} className="text-2xl font-bold text-foreground">
                {status === "exists" ? "You're already locked in" : "Founding price locked in"}
              </h2>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                You&apos;re set for{" "}
                <strong className="text-foreground">$19 lifetime</strong> at launch
                (regular $29) plus early trial access. We&apos;ll email you when it&apos;s ready.
              </p>
              <button
                type="button"
                onClick={closeWaitlist}
                className="mt-7 w-full rounded-lg py-3.5 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--amber)", color: "#0D0900" }}
              >
                Got it
              </button>
            </div>
          ) : (
            <>
              <div className="text-center">
                <p
                  className="mb-2 text-xs font-bold uppercase tracking-widest"
                  style={{ color: "var(--amber)" }}
                >
                  Founding operator offer
                </p>
                <h2 id={titleId} className="text-2xl font-bold text-foreground text-balance">
                  Lock in $19 at launch
                </h2>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Join now and skip the line - early access to the trial, plus a founding
                  lifetime price when ClearBand drops.
                </p>
              </div>

              {/* Incentive */}
              <div
                className="mt-6 rounded-xl border px-4 py-4"
                style={{
                  borderColor: "rgba(232,160,32,0.35)",
                  backgroundColor: "rgba(232,160,32,0.08)",
                }}
              >
                <div className="flex items-baseline justify-center gap-3">
                  <span
                    className="text-sm text-muted-foreground line-through"
                    style={{ textDecorationThickness: "1.5px" }}
                  >
                    $29
                  </span>
                  <span className="text-4xl font-black tracking-tight" style={{ color: "var(--amber)" }}>
                    $19
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">
                    lifetime
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-center text-xs text-muted-foreground">
                  <li>
                    <span style={{ color: "var(--amber)" }}>✓</span> Save $10 vs launch price
                  </li>
                  <li>
                    <span style={{ color: "var(--amber)" }}>✓</span> First in line for the 15-day trial
                  </li>
                  <li>
                    <span style={{ color: "var(--amber)" }}>✓</span> No credit card to join
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <input
                  ref={inputRef}
                  id="waitlist-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@callsign.radio"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status === "error") setStatus("idle")
                  }}
                  required
                  disabled={status === "loading"}
                  className="w-full rounded-lg border bg-transparent px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none disabled:opacity-60"
                  style={{
                    borderColor: status === "error" ? "#C0392B" : "var(--border)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--amber)"
                  }}
                  onBlur={(e) => {
                    if (status !== "error") e.currentTarget.style.borderColor = "var(--border)"
                  }}
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90 disabled:opacity-70"
                  style={{ backgroundColor: "var(--amber)", color: "#0D0900" }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Locking in…
                    </>
                  ) : (
                    "Claim $19 Founding Price"
                  )}
                </button>
              </form>

              {status === "error" && (
                <p className="mt-3 text-center text-sm text-red-400">{errorMsg}</p>
              )}

              <p className="mt-5 text-center text-xs text-muted-foreground">
                Offer for waitlist members only · Windows · macOS · Linux
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
