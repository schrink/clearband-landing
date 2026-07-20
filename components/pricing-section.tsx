import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "Unlimited Access to DeepFilterNet & RNNoise Models",
  "Local Whisper Transcription",
  "Advanced DSP Dashboard",
  "Dual-View Spectrum Analyzer",
  "Free Updates for Life",
  "15-Day Free Trial",
  "30-Day Money-Back Guarantee",
]

export function PricingSection() {
  return (
    <section id="pricing" className="border-t border-border/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Professional Audio. Hobbyist Price.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hardware DSP speakers cost $200+. Subscription services cost $15/month.
            <br />
            ClearBand AI is software that you <span className="text-amber-500 font-semibold">own</span>.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-lg">
          {/* Pricing Card */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-amber-500 bg-card">
            {/* Highlight badge */}
            <div className="absolute top-0 right-0 rounded-bl-xl bg-amber-500 px-4 py-1 text-sm font-semibold text-background">
              BEST VALUE
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <span className="text-lg font-semibold text-foreground">Lifetime License</span>
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">$29</span>
                <span className="text-muted-foreground">one-time payment</span>
              </div>

              <p className="mt-2 text-sm text-amber-500 font-medium">Includes 15-day free trial</p>

              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-8 w-full bg-amber-500 py-6 text-lg text-background hover:bg-amber-600">
                Start Free Trial
              </Button>

              <p className="mt-4 text-center text-sm text-muted-foreground">No credit card required for trial</p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span>No Subscriptions</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span>No Cloud Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span>Instant Download</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
