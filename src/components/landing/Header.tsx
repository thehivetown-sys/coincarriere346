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
      className={`sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur-xl shadow-[0_4px_24px_-12px_rgba(0,0,0,0.15)] transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center" aria-label="CoinCarrière">
          <img
            src={logo}
            alt="CoinCarrière"
            className="h-10 w-auto md:h-12"
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
