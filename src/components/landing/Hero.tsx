import { CtaButton } from "./CtaButton";
import heroImage from "@/assets/hero.svg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background hero image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-24 pt-16 md:pt-28 lg:pb-32">
        <div className="max-w-2xl animate-[fade-up_0.7s_ease-out_both] rounded-2xl bg-background/80 p-6 backdrop-blur-sm ring-1 ring-border/40 shadow-xl sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Plateforme de recrutement tech au Maroc
          </span>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Recrutez des développeurs qualifiés{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              sans perdre de temps
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base text-foreground/80 sm:text-lg">
            Recevez uniquement des profils tech pertinents grâce au matching intelligent CoinCarrière.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <CtaButton source="hero">Publier votre annonce maintenant</CtaButton>
            <p className="text-sm text-foreground/70">✓ Gratuit pour commencer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
