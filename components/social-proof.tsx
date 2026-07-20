const testimonials = [
  {
    quote: "Finally pulled JT65 out of S9 noise. This thing is magic on 160m. I've tried everything - this is the one that actually works.",
    author: "K3ABC",
    location: "Pennsylvania, USA",
    avatar: "/amateur-radio-operator-older-man-headphones.jpg",
  },
  {
    quote: "Ran the entire CQWW contest with ClearBand. No ear fatigue for the first time ever. My rate went up 15%.",
    author: "W1XYZ",
    location: "Contest Station",
    avatar: "/ham-radio-contester-at-desk-multiple-monitors.jpg",
  },
  {
    quote: "The Whisper transcription caught callsigns I missed in a pileup. Game changer for DX. Worth 10x the price.",
    author: "VK2DEF",
    location: "Australia",
    avatar: "/australian-amateur-radio-operator.jpg",
  },
]

export function SocialProof() {
  return (
    <section className="py-24 border-t border-border relative overflow-hidden" style={{ backgroundColor: "var(--surface-2)" }}>
      {/* Very subtle shack background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/professional-amateur-radio-shack-multiple-monitors.jpg"
          alt=""
          className="h-full w-full object-cover"
          style={{ opacity: 0.04 }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>
          Testimonials
        </p>
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl text-balance">
          Join thousands of hams who upgraded their audio
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border p-7 flex flex-col"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-1)" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.441L7 8.885l-3.09 1.625.59-3.441L2 4.632l3.455-.502L7 1z"
                      fill="var(--amber)"
                    />
                  </svg>
                ))}
              </div>

              <blockquote className="text-sm leading-relaxed text-foreground flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="h-10 w-10 rounded-full object-cover border-2"
                  style={{ borderColor: "var(--border)" }}
                />
                <div>
                  <p className="text-sm font-bold font-mono" style={{ color: "var(--amber)" }}>{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
