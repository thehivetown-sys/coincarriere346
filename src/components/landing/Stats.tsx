const stats = [
  { value: "3x", label: "plus rapide" },
  { value: "70%", label: "de CV en moins à traiter" },
  { value: "+1000", label: "développeurs actifs" },
];

export function Stats() {
  return (
    <section className="border-y border-border/50 bg-card/40 bg-glass py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 text-center sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-5xl font-bold leading-none md:text-6xl">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                {s.value}
              </span>
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
