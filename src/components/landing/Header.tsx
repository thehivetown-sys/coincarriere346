import { Sparkles } from "lucide-react";
import { CtaButton } from "./CtaButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 font-bold text-foreground">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-lg tracking-tight">CoinCarrière</span>
        </a>
        <div className="hidden md:block">
          <CtaButton source="header" size="md">
            Publier une annonce
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
