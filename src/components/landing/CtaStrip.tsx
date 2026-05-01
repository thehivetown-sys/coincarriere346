import { CtaButton } from "./CtaButton";

export function CtaStrip({ source, text }: { source: string; text: string }) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-secondary/30 bg-glass p-6 md:flex-row md:p-8">
          <p className="text-balance text-center text-lg font-bold text-foreground md:text-left md:text-xl">
            {text}
          </p>
          <CtaButton source={source}>Recevoir des profils qualifiés</CtaButton>
        </div>
      </div>
    </section>
  );
}
