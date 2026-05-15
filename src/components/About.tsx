"use client";

import { useInView } from "@/hooks/useInView";
import profile from "../../content/profile.json";

type Edu = (typeof profile.education)[number];

export default function About() {
  const { ref, isInView } = useInView();
  const degrees = profile.education.filter((e: Edu) => e.icon !== "cert");
  const certs = profile.education.filter((e: Edu) => e.icon === "cert");

  const dot = profile.bio.indexOf(". ");
  const pullQuote =
    dot > 0 ? profile.bio.slice(0, dot + 1).trim() : profile.bio.trim();
  const bodyRest =
    dot > 0 ? profile.bio.slice(dot + 2).trim() : "";

  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-0 bg-canvas-light dark:bg-canvas-dark">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${isInView ? "in-view" : ""}`}
      >
        <h2 className="font-display text-h2 font-bold tracking-tight text-text-primary dark:text-white mb-12">
          About me
        </h2>

        <div className="max-w-prose space-y-10">
          <blockquote className="font-display text-2xl sm:text-3xl font-bold tracking-tight leading-snug text-text-primary dark:text-white border-l-4 border-accent-500 pl-6 py-1 not-italic">
            {pullQuote}
          </blockquote>

          {bodyRest ? (
            <p className="text-base text-text-secondary dark:text-white/70 leading-relaxed">
              {bodyRest}
            </p>
          ) : null}

          <p className="text-base text-text-secondary dark:text-white/70 leading-relaxed border-l border-border-light dark:border-border-dark pl-5">
            {profile.targetRoles}
          </p>

          <div className="space-y-8 pt-4">
            <h3 className="text-label uppercase tracking-wide text-text-tertiary dark:text-white/45 font-medium">
              Education
            </h3>
            <ul className="space-y-6">
              {degrees.map((edu) => (
                <li key={`${edu.degree}-${edu.school}`}>
                  <p className="font-semibold text-text-primary dark:text-white">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-text-secondary dark:text-white/65 mt-1">
                    {edu.school}
                    <span className="text-text-tertiary dark:text-white/45">
                      {" · "}
                      {edu.period}
                    </span>
                  </p>
                  {"detail" in edu &&
                  typeof (edu as { detail?: string }).detail === "string" ? (
                    <p className="text-sm text-text-tertiary dark:text-white/50 mt-1">
                      {(edu as { detail: string }).detail}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-label uppercase tracking-wide text-text-tertiary dark:text-white/45 font-medium">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {certs.map((c) => (
                <kbd
                  key={c.degree}
                  className="inline-block px-2.5 py-1.5 text-xs font-mono rounded border border-border-light dark:border-border-dark bg-white/60 dark:bg-white/[0.06] text-text-primary dark:text-white/90 shadow-[inset_0_-1px_0_rgba(0,0,0,0.05)] dark:shadow-none"
                >
                  {c.degree}
                </kbd>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
