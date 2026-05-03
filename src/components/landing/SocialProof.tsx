import { Quote, Star } from "lucide-react";
import companiesBar from "@/assets/companies.png";
import { AnimatedNumber } from "./AnimatedNumber";

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
        <div className="text-center animate-[fade-up_0.7s_ease-out_both]">
          <div className="text-5xl font-bold tracking-tight md:text-6xl">
            <AnimatedNumber
              value={451}
              prefix="+"
              className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"
            />
          </div>
          <p className="mt-2 text-lg text-foreground">
            entreprises recrutent déjà sur <strong>CoinCarrière</strong>
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.author}
              className="rounded-2xl border border-border bg-background/40 p-6 shadow-[var(--shadow-elegant)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] animate-[fade-up_0.7s_ease-out_both]"
              style={{ animationDelay: `${i * 120}ms` }}
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
          <div className="mt-5 flex justify-center">
            <img
              src={companiesBar}
              alt="Entreprises partenaires de CoinCarrière"
              loading="lazy"
              decoding="async"
              className="h-auto w-full max-w-6xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
