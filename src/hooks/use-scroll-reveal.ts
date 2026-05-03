import { useEffect } from "react";

/**
 * Adds a global IntersectionObserver that reveals any element with
 * the [data-reveal] attribute when it scrolls into view.
 * Elements start hidden (opacity 0, translated down) and animate in.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)"),
    );
    if (els.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-revealed");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
