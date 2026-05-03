import { FileX, UserX, Clock, Sparkles, Target, Zap } from "lucide-react";
import { useState } from "react";

const pains = [
  {
    icon: FileX,
    text: "Des centaines de CV non qualifiés à trier",
    backIcon: Sparkles,
    backTitle: "Profils filtrés",
    backText: "Notre IA pré-qualifie chaque candidat. Vous ne recevez que des profils pertinents.",
  },
  {
    icon: UserX,
    text: "Des profils qui ne correspondent pas au besoin",
    backIcon: Target,
    backTitle: "Matching précis",
    backText: "Compétences, séniorité et culture d'entreprise alignées avec votre besoin.",
  },
  {
    icon: Clock,
    text: "Des semaines perdues avant de trouver le bon candidat",
    backIcon: Zap,
    backTitle: "Résultats en 72h",
    backText: "Premiers profils qualifiés livrés en moins de 3 jours.",
  },
];

function FlipCard({ pain, index }: { pain: typeof pains[number]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const BackIcon = pain.backIcon;

  return (
    <div
      className="group h-56 [perspective:1200px]"
      data-reveal
      data-reveal-delay={index * 120}
    >
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-pressed={flipped}
        aria-label={flipped ? "Retourner la carte" : `En savoir plus : ${pain.text}`}
        className={`relative h-full w-full text-left transition-transform duration-700 [transform-style:preserve-3d] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-start gap-4 rounded-2xl border border-destructive/20 bg-card/60 bg-glass p-6 [backface-visibility:hidden] shadow-[var(--shadow-elegant)] transition-shadow group-hover:shadow-[var(--shadow-glow)]">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-destructive/10 text-destructive">
            <pain.icon className="h-6 w-6" />
          </div>
          <p className="text-base font-semibold text-foreground">{pain.text}</p>
          <span className="mt-auto text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Cliquez pour voir la solution →
          </span>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col items-start gap-4 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 via-card/80 to-secondary/20 bg-glass p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[var(--shadow-glow)]">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground glow-primary">
            <BackIcon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-foreground">{pain.backTitle}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{pain.backText}</p>
          <span className="mt-auto text-xs font-medium uppercase tracking-widest text-primary">
            ← Retour
          </span>
        </div>
      </button>
    </div>
  );
}

export function Problem() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-balance text-center text-3xl md:text-4xl" data-reveal>
          Pourquoi recruter un développeur prend encore des semaines ?
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {pains.map((p, i) => (
            <FlipCard key={p.text} pain={p} index={i} />
          ))}
        </div>
        <p
          className="mt-10 text-center text-xl font-bold text-foreground md:text-2xl"
          data-reveal
        >
          On a simplifié tout ça.{" "}
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            ↓
          </span>
        </p>
      </div>
    </section>
  );
}
