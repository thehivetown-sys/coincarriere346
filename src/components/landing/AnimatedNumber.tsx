import { useInView } from "@/hooks/use-in-view";
import { useCountUp } from "@/hooks/use-count-up";

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1800,
  className,
}: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const current = useCountUp(value, duration, inView);
  const display = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toLocaleString("fr-FR");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
