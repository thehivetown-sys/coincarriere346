import { Target, Users, FlaskConical, Handshake, BarChart3, Globe } from "lucide-react";

const items = [
  { icon: Target, title: "Profils ciblés", desc: "Recevez uniquement des développeurs pertinents pour votre besoin." },
  { icon: Users, title: "Pipeline clair", desc: "Visualisez et gérez vos candidats en quelques clics." },
  { icon: FlaskConical, title: "Tests techniques", desc: "Évitez les candidats non qualifiés dès le départ." },
  { icon: Handshake, title: "Collaboration équipe", desc: "Collaborez facilement avec votre équipe." },
  { icon: BarChart3, title: "Décisions data", desc: "Optimisez votre recrutement avec des données claires." },
  { icon: Globe, title: "Page carrière", desc: "Attirez plus de candidats qualifiés automatiquement." },
];

export function Benefits() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-balance text-center text-3xl md:text-4xl" data-reveal>
          Tout ce qu'il faut pour recruter vite et bien
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b, i) => (
            <div
              key={b.title}
              data-reveal
              data-reveal-delay={i * 90}
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
