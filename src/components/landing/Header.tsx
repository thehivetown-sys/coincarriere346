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
        <a href="#top" className="group relative flex items-center" aria-label="CoinCarrière">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-90"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-1 top-1/2 -z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-primary/30 blur-md"
          />
          <img
            src={logo}
            alt="CoinCarrière"
            className="relative h-10 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-[1.03] md:h-12"
          />
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
