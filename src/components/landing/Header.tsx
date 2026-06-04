import { useEffect, useState } from "react";
import { CtaButton } from "./CtaButton";
import logo from "@/assets/logo.png";

export function Header() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 80) setHidden(true);
      else setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-white/10 bg-[var(--brand-deep)]/70 backdrop-blur-xl shadow-[0_4px_24px_-12px_rgba(0,0,0,0.6)] transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center" aria-label="CoinCarrière">
          <span className="inline-flex items-center rounded-xl bg-white/95 px-3 py-1.5 shadow-md ring-1 ring-black/5">
            <img src={logo} alt="CoinCarrière" className="h-8 w-auto md:h-10" />
          </span>
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
