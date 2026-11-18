import { cn } from "@/lib/utils";

const TONES = {
  pulse: "text-pulse",
  ritual: "text-ritual",
  light: "text-white/85",
};

const SIZES = {
  sm: "text-3xl",
  md: "text-5xl",
  lg: "text-6xl md:text-7xl",
};

type RankBadgeProps = {
  rank: number;
  accent?: keyof typeof TONES;
  size?: keyof typeof SIZES;
  className?: string;
};

export default function RankBadge({ rank, accent = "pulse", size = "md", className }: RankBadgeProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "font-display font-light leading-none tabular-nums",
        TONES[accent],
        SIZES[size],
        className,
      )}
    >
      {String(rank).padStart(2, "0")}
    </span>
  );
}