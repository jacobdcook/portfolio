"use client";

import { useInView } from "@/hooks/useInView";
import { navySectionStart, navySubheading } from "@/lib/navySection";
import SectionHeading from "@/components/SectionHeading";
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
    <section id="about" className={navySectionStart}>
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${isInView ? "in-view" : ""}`}
      >
        <SectionHeading index="01" title="About me" className="mb-12" />

        <div className="max-w-prose space-y-10">
          <blockquote className="font-display text-2xl sm:text-3xl font-bold tracking-tight leading-snug text-navy-900 dark:text-white border-l-4 border-navy-500 dark:border-navy-400 pl-6 py-1 not-italic">
            {pullQuote}
          </blockquote>

          {bodyRest ? (
            <p className="text-base text-navy-900/80 dark:text-white/75 leading-relaxed">
              {bodyRest}
            </p>
          ) : null}

          <p className="text-base text-navy-900/80 dark:text-white/75 leading-relaxed border-l border-navy-200 dark:border-navy-700 pl-5">
            {profile.targetRoles}
          </p>

          <div className="space-y-8 pt-4">
            <h3 className={navySubheading}>Education</h3>
            <ul className="space-y-6">
              {degrees.map((edu) => (
                <li key={`${edu.degree}-${edu.school}`}>
                  <p className="font-semibold text-navy-900 dark:text-white">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-navy-800/75 dark:text-white/65 mt-1">
                    {edu.school}
                    <span className="text-navy-600/80 dark:text-white/45">
                      {" · "}
                      {edu.period}
                    </span>
                  </p>
                  {"detail" in edu &&
                  typeof (edu as { detail?: string }).detail === "string" ? (
                    <p className="text-sm text-navy-700/70 dark:text-white/50 mt-1">
                      {(edu as { detail: string }).detail}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className={navySubheading}>Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {certs.map((c) => (
                <kbd
                  key={c.degree}
                  className="inline-block px-2.5 py-1.5 text-xs font-mono rounded border border-navy-200 dark:border-navy-700 bg-white/70 dark:bg-navy-900/40 text-navy-900 dark:text-white/90 shadow-[inset_0_-1px_0_rgba(0,0,0,0.04)] dark:shadow-none"
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
