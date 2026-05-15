"use client";

import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { useInView } from "@/hooks/useInView";
import profile from "../../content/profile.json";

export default function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="py-24 lg:py-32 px-6 lg:px-0 bg-canvas-light dark:bg-canvas-dark border-t border-border-light dark:border-border-dark">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${isInView ? "in-view" : ""}`}
      >
        <h2 className="font-display text-h2 font-bold tracking-tight text-text-primary dark:text-white mb-14 lg:mb-16">
          Experience
        </h2>

        <div className="space-y-0">
          {profile.experience.map((exp) => (
            <article
              key={`${exp.title}-${exp.period}`}
              className="grid grid-cols-1 lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] gap-3 lg:gap-10 py-10 border-b border-border-light dark:border-border-dark first:pt-0 last:border-b-0"
            >
              <div className="lg:pt-0.5">
                <p className="font-mono text-sm text-text-secondary dark:text-white/65 tabular-nums lg:text-right whitespace-pre-line">
                  {exp.period.replace(" – ", "\n")}
                </p>
              </div>

              <div className="min-w-0 space-y-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4">
                  <h3 className="text-lg font-semibold tracking-tight text-text-primary dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wide text-text-tertiary dark:text-white/45">
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                  {exp.company}
                </p>
                <p className="text-base text-text-secondary dark:text-white/70 leading-relaxed">
                  {exp.description}
                </p>
                <p className="text-xs text-text-tertiary dark:text-white/45 flex items-center gap-1.5 pt-1">
                  <MapPin size={14} weight="bold" aria-hidden />
                  <span>{exp.location}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
