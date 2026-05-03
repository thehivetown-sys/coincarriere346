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
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="marquee-track flex w-max items-center gap-20 py-4 md:gap-28"
        style={{
          animation: "marquee 40s linear infinite",
          willChange: "transform",
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
            draggable={false}
            className="h-24 w-auto shrink-0 select-none opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100 md:h-32 lg:h-36"
          />
        ))}
      </div>
    </div>
  );
}
