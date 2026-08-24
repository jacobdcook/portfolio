import { navyHeading } from "@/lib/navySection";

interface SectionHeadingProps {
  index: string;
  title: string;
  variant?: "navy" | "accent";
  className?: string;
}

export default function SectionHeading({
  index,
  title,
  variant = "navy",
  className = "",
}: SectionHeadingProps) {
  const navy = variant === "navy";
  return (
    <div className={`flex items-baseline gap-4 ${className}`}>
      <span
        aria-hidden
        className={`font-mono text-sm sm:text-base font-bold tabular-nums ${
          navy
            ? "text-navy-500 dark:text-navy-300"
            : "text-accent-500 dark:text-accent-400"
        }`}
      >
        {index}.
      </span>
      <h2
        className={
          navy
            ? navyHeading
            : "font-display text-h2 font-bold tracking-tight text-text-primary dark:text-white"
        }
      >
        {title}
      </h2>
      <span
        aria-hidden
        className={`hidden sm:block flex-1 h-px self-center ${
          navy
            ? "bg-gradient-to-r from-navy-300 dark:from-navy-700 to-transparent"
            : "bg-gradient-to-r from-accent-200 dark:from-border-dark to-transparent"
        }`}
      />
    </div>
  );
}
