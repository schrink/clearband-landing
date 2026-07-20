import { Radio } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
              <Radio className="h-5 w-5 text-background" />
            </div>
            <span className="font-mono text-lg font-semibold tracking-tight text-foreground">
              ClearBand <span className="text-amber-500">AI</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Support
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>

          <p className="text-sm text-muted-foreground">© 2025 ClearBand AI. All rights reserved.</p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">73 de ClearBand AI — Hear the signal, ignore the QRN.</p>
        </div>
      </div>
    </footer>
  )
}
