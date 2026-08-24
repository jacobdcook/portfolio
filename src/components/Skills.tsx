"use client";

import { useInView } from "@/hooks/useInView";
import { navySectionShell, navySubheading } from "@/lib/navySection";
import SectionHeading from "@/components/SectionHeading";
import profile from "../../content/profile.json";

const groups: { title: string; key: keyof typeof profile.skills }[] = [
  { title: "Detection & blue team", key: "soc_blue_team" },
  { title: "IT & systems", key: "it_systems" },
  { title: "Supporting", key: "supporting" },
];

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className={navySectionShell}>
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${isInView ? "in-view" : ""}`}
      >
        <SectionHeading index="02" title="Skills" className="mb-14 lg:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-16">
          {groups.map((g) => (
            <div key={g.key}>
              <h3
                className={`${navySubheading} border-b border-navy-200 dark:border-navy-700 pb-3 mb-5`}
              >
                {g.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {profile.skills[g.key].map((skill) => (
                  <li
                    key={skill}
                    className="px-3.5 py-1.5 text-sm rounded-full border border-navy-200 dark:border-navy-700 bg-white/70 dark:bg-navy-900/40 text-navy-900/85 dark:text-white/80 leading-relaxed transition-colors hover:border-navy-500 hover:text-navy-700 dark:hover:border-neon-500/50 dark:hover:text-neon-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
