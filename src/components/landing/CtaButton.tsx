import { ArrowRight } from "lucide-react";
import { REGISTER_URL, trackLead } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type Props = {
  source: string;
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
};

export function CtaButton({ source, children, className, size = "lg" }: Props) {
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead(source)}
      data-cta={source}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-bold",
        "bg-primary text-primary-foreground glow-primary",
        "transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-glow",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "lg" ? "px-7 py-4 text-base md:text-lg" : "px-5 py-3 text-sm",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-5 w-5" />
    </a>
  );
}
