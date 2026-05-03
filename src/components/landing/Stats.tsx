import { AnimatedNumber } from "./AnimatedNumber";

const stats = [
  { value: 3, suffix: "x", label: "plus rapide" },
  { value: 70, suffix: "%", label: "de CV en moins à traiter" },
  { value: 1000, prefix: "+", label: "développeurs actifs" },
];

export function Stats() {
  return (
    <section className="border-y border-border/50 bg-card/40 bg-glass py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 text-center sm:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="animate-[fade-up_0.7s_ease-out_both]"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="text-5xl font-bold leading-none md:text-6xl">
              <AnimatedNumber
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"
              />
            </div>
            <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
