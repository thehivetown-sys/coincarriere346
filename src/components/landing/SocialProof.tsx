import { Quote } from "lucide-react";

export function SocialProof() {
  return (
    <section className="border-y border-border/50 bg-card/40 bg-glass py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-5xl font-bold tracking-tight md:text-6xl">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                +451
              </span>
            </div>
            <p className="mt-2 text-lg text-foreground">
              entreprises recrutent sur <strong>CoinCarrière</strong>
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 opacity-70">
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
          <figure className="rounded-2xl border border-border bg-background/40 p-6 shadow-[var(--shadow-elegant)]">
            <Quote className="h-8 w-8 text-primary" />
            <blockquote className="mt-3 text-balance text-lg leading-relaxed text-foreground md:text-xl">
              « On a divisé par 3 notre temps de recrutement. »
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              — HR Manager, ESN Casablanca
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
