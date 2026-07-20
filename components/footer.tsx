import { Radio } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12" style={{ backgroundColor: "#0D0900" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Radio className="h-4 w-4" style={{ color: "var(--amber)" }} />
            <span className="text-sm font-bold uppercase tracking-widest text-foreground">
              ClearBand&nbsp;<span style={{ color: "var(--amber)" }}>AI</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <a href="mailto:contact@clearbandai.app" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>

          <p className="text-xs text-muted-foreground">© 2026 ClearBand AI. All rights reserved.</p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground" style={{ letterSpacing: "0.05em" }}>
            73 de YU4VLR - Hear the signal, ignore the QRN.
          </p>
        </div>
      </div>
    </footer>
  )
}
