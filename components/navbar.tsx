import { Radio } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
            <Radio className="h-5 w-5 text-background" />
          </div>
          <span className="font-mono text-lg font-semibold tracking-tight text-foreground">
            ClearBand <span className="text-amber-500">AI</span>
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="#specs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Specs
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            Learn More
          </Button>
          <Button size="sm" className="bg-amber-500 text-background hover:bg-amber-600">
            Download
          </Button>
        </div>
      </div>
    </nav>
  )
}
