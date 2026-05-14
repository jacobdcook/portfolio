"use client";

import { useInView } from "@/hooks/useInView";
import profile from "../../content/profile.json";

const groups: { title: string; key: keyof typeof profile.skills }[] = [
  { title: "Detection & blue team", key: "soc_blue_team" },
  { title: "IT & systems", key: "it_systems" },
  { title: "Supporting", key: "supporting" },
];

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="skills"
      className="py-24 lg:py-32 px-6 lg:px-0 bg-canvas-light dark:bg-canvas-dark border-t border-border-light dark:border-border-dark"
    >
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${isInView ? "in-view" : ""}`}
      >
        <h2 className="font-display text-h2 font-bold tracking-tight text-text-primary dark:text-white mb-14 lg:mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-16">
          {groups.map((g) => (
            <div key={g.key}>
              <h3 className="text-label uppercase tracking-wide text-text-tertiary dark:text-white/45 font-medium border-b border-border-light dark:border-border-dark pb-3 mb-5">
                {g.title}
              </h3>
              <ul className="space-y-3">
                {profile.skills[g.key].map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-text-secondary dark:text-white/75 leading-relaxed pl-3 border-l border-border-light dark:border-border-dark"
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
