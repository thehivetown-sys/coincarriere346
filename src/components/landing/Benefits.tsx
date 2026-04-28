import { Target, Users, FlaskConical, Handshake, BarChart3, Globe } from "lucide-react";

const items = [
  { icon: Target, title: "Matching intelligent", desc: "Moins de CV inutiles, plus de profils pertinents." },
  { icon: Users, title: "Pipeline visuel", desc: "Suivez chaque candidat à chaque étape." },
  { icon: FlaskConical, title: "Tests techniques", desc: "Filtrez efficacement avant l'entretien." },
  { icon: Handshake, title: "Collaboration équipe", desc: "Recrutez à plusieurs, sans friction." },
  { icon: BarChart3, title: "Analytics", desc: "Optimisez vos recrutements avec la data." },
  { icon: Globe, title: "Page carrière", desc: "Attirez plus de talents avec votre marque." },
];

export function Benefits() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-balance text-center text-3xl md:text-4xl">
          Tout ce dont vous avez besoin pour recruter mieux
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-border bg-card/60 bg-glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
