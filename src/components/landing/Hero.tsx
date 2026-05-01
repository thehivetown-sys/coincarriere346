import { CtaButton } from "./CtaButton";
import heroAvif640 from "@/assets/hero-640.avif";
import heroAvif1024 from "@/assets/hero-1024.avif";
import heroAvif1600 from "@/assets/hero-1600.avif";
import heroWebp640 from "@/assets/hero-640.webp";
import heroWebp1024 from "@/assets/hero-1024.webp";
import heroWebp1600 from "@/assets/hero-1600.webp";
import heroJpg from "@/assets/hero-1600.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background hero image — LCP, eager + high priority */}
      <div className="absolute inset-0 -z-10">
        <picture>
          <source
            type="image/avif"
            srcSet={`${heroAvif640} 640w, ${heroAvif1024} 1024w, ${heroAvif1600} 1600w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`${heroWebp640} 640w, ${heroWebp1024} 1024w, ${heroWebp1600} 1600w`}
            sizes="100vw"
          />
          <img
            src={heroJpg}
            alt=""
            aria-hidden="true"
            width={1600}
            height={900}
            decoding="async"
            loading="eager"
            // @ts-expect-error fetchpriority is valid HTML, React 19 supports it
            fetchpriority="high"
            className="h-full w-full object-cover object-right md:object-center"
          />
        </picture>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background/40 md:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-gradient-to-r from-background/90 via-background/60 to-transparent md:block"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:pb-24 sm:pt-16 md:pt-28 lg:pb-32">
        <div className="max-w-2xl animate-[fade-up_0.7s_ease-out_both]">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            +451 entreprises recrutent déjà avec nous
          </span>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Recevez des développeurs qualifiés{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              en 72h
            </span>{" "}
            — sans trier des dizaines de CV inutiles
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base text-foreground/80 sm:text-lg">
            CoinCarrière vous envoie uniquement des profils déjà qualifiés et prêts à être recrutés.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <CtaButton source="hero">Recevoir des profils qualifiés</CtaButton>
            <a
              href="#process"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background/40 px-5 py-3 text-sm font-bold text-foreground transition-colors hover:bg-background/70"
            >
              Voir comment ça marche
            </a>
          </div>
          <p className="mt-3 text-sm text-foreground/70">
            ✓ Mise en ligne en 2 minutes — sans engagement
          </p>
        </div>
      </div>
    </section>
  );
}
