import { CtaButton } from "./CtaButton";
import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center" aria-label="CoinCarrière">
          <img src={logo} alt="CoinCarrière" className="h-10 w-auto md:h-12" />
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
