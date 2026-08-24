import { navyHeading } from "@/lib/navySection";

interface SectionHeadingProps {
  index: string;
  title: string;
  className?: string;
}

export default function SectionHeading({
  index,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex items-baseline gap-4 ${className}`}>
      <span
        aria-hidden
        className="font-mono text-sm sm:text-base font-bold tabular-nums text-navy-500 dark:text-neon-500"
      >
        {index}.
      </span>
      <h2 className={navyHeading}>{title}</h2>
      <span
        aria-hidden
        className="hidden sm:block flex-1 h-px self-center bg-gradient-to-r from-navy-300 dark:from-navy-700 to-transparent"
      />
    </div>
  );
}
