import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "On a recruté un développeur React en 5 jours au lieu de 3 semaines.",
    author: "CTO, Startup SaaS",
  },
  {
    quote: "Plus besoin de trier 100 CV. On reçoit 5 profils, tous pertinents.",
    author: "HR Manager, ESN Casablanca",
  },
  {
    quote: "Notre temps de recrutement a été divisé par 3.",
    author: "Lead Tech, Scale-up Rabat",
  },
];

export function SocialProof() {
  return (
    <section className="border-y border-border/50 bg-card/40 bg-glass py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="text-5xl font-bold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              +451
            </span>
          </div>
          <p className="mt-2 text-lg text-foreground">
            entreprises recrutent déjà sur <strong>CoinCarrière</strong>
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 opacity-70">
            {["TECH·CO", "DEVLAB", "ATLAS·IT", "NEXA", "BYTEMA"].map((logo) => (
              <div
                key={logo}
                className="rounded-md border border-border px-3 py-2 text-xs font-bold tracking-widest text-muted-foreground"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl border border-border bg-background/40 p-6 shadow-[var(--shadow-elegant)]"
            >
              <Quote className="h-7 w-7 text-primary" />
              <blockquote className="mt-3 text-balance text-base leading-relaxed text-foreground">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
