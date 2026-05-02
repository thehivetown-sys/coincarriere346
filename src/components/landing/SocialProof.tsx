import { Quote, Star } from "lucide-react";
import companiesBar from "@/assets/companies.png";

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

function Stars() {
  return (
    <div className="mt-3 flex items-center gap-0.5" aria-label="Note 5 sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

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
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl border border-border bg-background/40 p-6 shadow-[var(--shadow-elegant)]"
            >
              <Quote className="h-7 w-7 text-primary" />
              <Stars />
              <blockquote className="mt-3 text-balance text-base leading-relaxed text-foreground">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— {t.author}</figcaption>
            </figure>
          ))}
        </div>

        {/* Companies logo bar */}
        <div className="mt-12">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Ils nous font confiance
          </p>
          <div className="mt-5 overflow-hidden rounded-xl">
            <img
              src={companiesBar}
              alt="Entreprises partenaires de CoinCarrière"
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full max-w-5xl opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
