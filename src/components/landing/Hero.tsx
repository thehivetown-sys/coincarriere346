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
        <div className="max-w-2xl animate-[fade-up_0.7s_ease-out_both]">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Plateforme de recrutement tech au Maroc
          </span>
          <h1 className="mt-5 text-balance text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Recrutez des développeurs qualifiés{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              sans perdre de temps
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            Recevez uniquement des profils tech pertinents grâce au matching intelligent CoinCarrière.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <CtaButton source="hero">Publier votre annonce maintenant</CtaButton>
            <p className="text-sm text-muted-foreground">✓ Gratuit pour commencer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
