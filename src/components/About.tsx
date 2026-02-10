"use client";

import { useInView } from "@/hooks/useInView";
import profile from "../../content/profile.json";

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 px-6">
      <div ref={ref} className={`max-w-4xl mx-auto reveal ${isInView ? "in-view" : ""}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 dark:text-white mb-2">
          About <span className="gradient-text">me</span>
        </h2>
        <div className="w-16 h-1 bg-gojo-500 rounded-full mb-8" />

        <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-ice-100 dark:border-dark-600">
          <p className="text-lg text-dark-700/80 dark:text-white/70 leading-relaxed mb-6">
            {profile.bio}
          </p>

          <p className="text-base text-gojo-700 dark:text-gojo-300 font-medium mb-8 p-4 bg-gojo-50 dark:bg-gojo-700/20 rounded-xl border border-gojo-200 dark:border-gojo-600/30">
            {profile.targetRoles}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {profile.education.map((edu, i) => (
              <div
                key={i}
                className="bg-ice-50 dark:bg-dark-700 rounded-xl p-4 text-center border border-gojo-100 dark:border-dark-600 hover:border-gojo-300 dark:hover:border-gojo-500 transition-colors"
              >
                <div className="text-2xl mb-2">
                  {edu.icon === "shield"
                    ? "🛡️"
                    : edu.icon === "code"
                    ? "💻"
                    : "📜"}
                </div>
                <p className="font-semibold text-dark-800 dark:text-white text-sm">
                  {edu.degree}
                </p>
                <p className="text-xs text-dark-700/60 dark:text-white/50 mt-1">{edu.school}</p>
                <p className="text-xs text-gojo-600 dark:text-gojo-400 font-medium mt-1">
                  {edu.period}
                </p>
                {"detail" in edu && (
                  <p className="text-xs text-dark-700/50 dark:text-white/40 mt-1">{(edu as { detail?: string }).detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
