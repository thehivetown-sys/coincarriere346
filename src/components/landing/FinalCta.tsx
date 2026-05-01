import { Clock } from "lucide-react";
import { CtaButton } from "./CtaButton";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[140px]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-balance text-4xl leading-tight md:text-5xl lg:text-6xl">
          Votre prochain développeur{" "}
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            vous attend déjà
          </span>
        </h2>
        <p className="mt-5 text-balance text-lg text-muted-foreground">
          Publiez votre besoin et recevez des profils qualifiés en quelques jours.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <CtaButton source="final">Publier mon annonce</CtaButton>
          <p className="text-sm text-muted-foreground">Sans engagement — résultats en 72h</p>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
            <Clock className="h-4 w-4" />
            3 mois gratuits — offre limitée
          </div>
        </div>
      </div>
    </section>
  );
}
