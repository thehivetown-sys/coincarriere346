import logo1 from "@/assets/logos/logo-1.svg";
import logo2 from "@/assets/logos/logo-2.svg";
import logo3 from "@/assets/logos/logo-3.svg";
import logo4 from "@/assets/logos/logo-4.svg";
import logo5 from "@/assets/logos/logo-5.svg";

const logos = [logo1, logo2, logo3, logo4, logo5];

export function LogoMarquee() {
  // Duplicate for seamless looping
  const items = [...logos, ...logos];

  return (
    <div
      className="group relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center gap-16 py-2"
        style={{
          animation: "marquee 30s linear infinite",
        }}
      >
        {items.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="h-16 w-auto shrink-0 opacity-80 transition-opacity hover:opacity-100 md:h-20"
          />
        ))}
      </div>
    </div>
  );
}
