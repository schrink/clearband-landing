import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0">
        <img src="/dark-amateur-radio-shack-with-hf-transceiver-equip.jpg" alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-500">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            No Subscriptions. No Cloud. 100% Offline.
          </div>

          {/* Headline */}
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Hear the signal,
            <br />
            <span className="text-amber-500">ignore the QRN.</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            The first "Hybrid Chain" audio processor for Amateur Radio. Studio-grade noise reduction, local AI
            transcription, and surgical DSP—running entirely on your PC.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-amber-500 px-8 text-background hover:bg-amber-600">
              <Download className="mr-2 h-5 w-5" />
              Download Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-border px-8 bg-transparent">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Platform badges */}
          <p className="mt-4 text-sm text-muted-foreground">Windows / macOS / Linux</p>
        </div>

        {/* App Screenshot */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-border/50 bg-card shadow-2xl shadow-amber-500/5">
            <img
              src="/images/image.png"
              alt="ClearBand AI Application Interface showing real-time spectrum analyzer and controls"
              className="w-full"
            />
          </div>
          {/* Glow effect */}
          <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-amber-500/10 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
