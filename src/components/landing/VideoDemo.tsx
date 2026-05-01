import { Play } from "lucide-react";

export function VideoDemo() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-balance text-center text-3xl md:text-4xl">
          Comment recruter un développeur en 72h{" "}
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            (sans trier 100 CV)
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          2 minutes pour comprendre comment CoinCarrière transforme votre recrutement.
        </p>
        <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card/60 bg-glass shadow-[var(--shadow-elegant)]">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-transparent to-primary/30" />
          <button
            type="button"
            className="absolute inset-0 grid place-items-center transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Lire la vidéo de démonstration"
          >
            <span className="relative grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground glow-primary">
              <Play className="h-8 w-8 translate-x-0.5" fill="currentColor" />
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
            </span>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground">
            Vidéo MOF — Démo CoinCarrière
          </div>
        </div>
      </div>
    </section>
  );
}
