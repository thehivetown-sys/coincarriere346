import { FileText, Users, ClipboardCheck, Handshake } from "lucide-react";

const steps = [
  { icon: FileText, title: "Publiez votre besoin", hint: "en 2 minutes" },
  { icon: Users, title: "Recevez des profils", hint: "déjà qualifiés" },
  { icon: ClipboardCheck, title: "Évaluez rapidement", hint: "sans perdre de temps" },
  { icon: Handshake, title: "Recrutez", hint: "le bon développeur" },
];

export function Process() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-balance text-center text-3xl md:text-4xl">
          Recrutez en 4 étapes simples
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Un processus pensé pour les recruteurs débordés.
        </p>

        <div className="relative mt-12 grid gap-6 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative flex flex-col items-center rounded-2xl border border-border bg-card/60 bg-glass p-6 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground glow-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="mt-3 text-xs font-bold uppercase tracking-widest text-primary">
                Étape {i + 1}
              </div>
              <h3 className="mt-2 text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
