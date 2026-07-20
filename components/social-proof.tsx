import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Finally pulled JT65 out of S9 noise. This thing is magic on 160m.",
    author: "K3ABC",
    location: "Pennsylvania",
    avatar: "/amateur-radio-operator-older-man-headphones.jpg",
  },
  {
    quote: "Ran the entire CQWW contest with ClearBand. No ear fatigue for the first time ever.",
    author: "W1XYZ",
    location: "Contest Station",
    avatar: "/ham-radio-contester-at-desk-multiple-monitors.jpg",
  },
  {
    quote: "The Whisper transcription caught callsigns I missed in a pileup. Game changer for DX.",
    author: "VK2DEF",
    location: "Australia",
    avatar: "/australian-amateur-radio-operator.jpg",
  },
]

export function SocialProof() {
  return (
    <section className="border-t border-border/40 py-20">
      {/* Background shack image */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/professional-amateur-radio-shack-multiple-monitors.jpg" alt="" className="h-full w-full object-cover opacity-10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by Operators Worldwide
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of hams who&apos;ve upgraded their audio
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-xl border border-border/50 bg-card/80 backdrop-blur p-6">
                {/* Stars */}
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <blockquote className="mt-4 text-foreground">&ldquo;{testimonial.quote}&rdquo;</blockquote>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-mono font-semibold text-amber-500">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
