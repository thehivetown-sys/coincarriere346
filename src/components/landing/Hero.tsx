import { CtaButton } from "./CtaButton";
import heroImage from "@/assets/hero.svg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-12 md:pt-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24">
        <div className="animate-[fade-up_0.7s_ease-out_both]">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
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

        <div className="relative animate-[fade-up_0.9s_ease-out_both]">
          <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" />
          <img
            src={heroImage}
            alt="Recruteur tech débordé par les CVs — CoinCarrière"
            className="relative w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
