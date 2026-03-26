"use client";

import { useInView } from "@/hooks/useInView";
import profile from "../../content/profile.json";

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-20 px-6 bg-ice-50 dark:bg-dark-800">
      <div ref={ref} className={`max-w-4xl mx-auto reveal ${isInView ? "in-view" : ""}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 dark:text-white mb-2">
          <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-gojo-500 rounded-full mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Detection & Blue Team */}
          <div className="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-sm border border-gojo-200 dark:border-dark-600 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gojo-700 dark:text-gojo-400 mb-4 flex items-center gap-2">
              <span className="w-9 h-9 rounded-lg bg-gojo-50 dark:bg-gojo-700/20 flex items-center justify-center text-lg">🛡️</span>
              Detection & Blue Team
            </h3>
            <ul className="space-y-2.5">
              {profile.skills.soc_blue_team.map((skill, i) => (
                <li key={i} className="text-dark-700/80 dark:text-white/70 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gojo-500 mt-1.5 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* IT / Systems */}
          <div className="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-sm border border-gojo-200 dark:border-dark-600 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gojo-700 dark:text-gojo-400 mb-4 flex items-center gap-2">
              <span className="w-9 h-9 rounded-lg bg-gojo-50 dark:bg-gojo-700/20 flex items-center justify-center text-lg">💻</span>
              IT / Systems
            </h3>
            <ul className="space-y-2.5">
              {profile.skills.it_systems.map((skill, i) => (
                <li key={i} className="text-dark-700/80 dark:text-white/70 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gojo-500 mt-1.5 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Supporting */}
          <div className="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-sm border border-gojo-200 dark:border-dark-600 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gojo-700 dark:text-gojo-400 mb-4 flex items-center gap-2">
              <span className="w-9 h-9 rounded-lg bg-gojo-50 dark:bg-gojo-700/20 flex items-center justify-center text-lg">🔧</span>
              Supporting
            </h3>
            <ul className="space-y-2.5">
              {profile.skills.supporting.map((skill, i) => (
                <li key={i} className="text-dark-700/80 dark:text-white/70 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gojo-500 mt-1.5 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
