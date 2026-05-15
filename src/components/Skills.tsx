"use client";

import { useInView } from "@/hooks/useInView";
import {
  navySectionShell,
  navyHeading,
  navySubheading,
} from "@/lib/navySection";
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
        <h2 className={`${navyHeading} mb-14 lg:mb-16`}>Skills</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-16">
          {groups.map((g) => (
            <div key={g.key}>
              <h3
                className={`${navySubheading} border-b border-navy-200 dark:border-navy-700 pb-3 mb-5`}
              >
                {g.title}
              </h3>
              <ul className="space-y-3">
                {profile.skills[g.key].map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-navy-900/80 dark:text-white/75 leading-relaxed pl-3 border-l border-navy-200 dark:border-navy-700"
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
