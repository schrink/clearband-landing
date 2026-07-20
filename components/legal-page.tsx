import Link from "next/link"
import { Radio } from "lucide-react"
import type { ReactNode } from "react"

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0900" }}>
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <Radio className="h-4 w-4" style={{ color: "var(--amber)" }} />
            <span className="text-sm font-bold uppercase tracking-widest text-foreground">
              ClearBand&nbsp;<span style={{ color: "var(--amber)" }}>AI</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--amber)" }}>
          Legal
        </p>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>

        <div className="legal-prose mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-0 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-foreground [&_strong]:text-foreground">
          {children}
        </div>

        <p className="mt-14 text-xs text-muted-foreground">
          Questions?{" "}
          <a href="mailto:contact@clearbandai.app" className="underline underline-offset-2 hover:text-foreground">
            contact@clearbandai.app
          </a>
        </p>
      </main>
    </div>
  )
}
