import { FileX, UserX, Clock } from "lucide-react";

const pains = [
  { icon: FileX, text: "Des centaines de CV non qualifiés à trier" },
  { icon: UserX, text: "Des profils qui ne correspondent pas au besoin" },
  { icon: Clock, text: "Des semaines perdues avant de trouver le bon candidat" },
];

export function Problem() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-balance text-center text-3xl md:text-4xl">
          Pourquoi recruter un développeur prend encore des semaines ?
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p.text}
              className="flex flex-col items-start gap-4 rounded-2xl border border-destructive/20 bg-card/60 bg-glass p-6"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-destructive/10 text-destructive">
                <p.icon className="h-6 w-6" />
              </div>
              <p className="text-base font-semibold text-foreground">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xl font-bold text-foreground md:text-2xl">
          On a simplifié tout ça.{" "}
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            ↓
          </span>
        </p>
      </div>
    </section>
  );
}
