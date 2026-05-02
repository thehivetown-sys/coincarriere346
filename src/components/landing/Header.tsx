import { CtaButton } from "./CtaButton";
import logo from "@/assets/logo.svg";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center" aria-label="CoinCarrière">
          <img src={logo} alt="CoinCarrière" className="h-9 w-auto" />
        </a>
        <div className="hidden md:block">
          <CtaButton source="header" size="md">
            Commencer maintenant
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
