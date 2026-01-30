"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import profile from "../../content/profile.json";

type Category = "all" | "cybersecurity" | "software";

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Cybersecurity & AI", value: "cybersecurity" },
  { label: "Software Development", value: "software" },
];

export default function Projects() {
  const [active, setActive] = useState<Category>("all");
  const { ref, isInView } = useInView();

  const filtered =
    active === "all"
      ? profile.projects
      : profile.projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 px-6 bg-ice-50">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${isInView ? "in-view" : ""}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-2">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gojo-500 rounded-full mb-8" />

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  active === f.value
                    ? "bg-gojo-600 text-white shadow-md shadow-gojo-600/20"
                    : "bg-white text-dark-700/70 border border-ice-200 hover:border-gojo-300 hover:text-gojo-600"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-stagger ${isInView ? "in-view" : ""}`}>
          {filtered.map((project, i) => {
            const isFeatured = "featured" in project && project.featured;
            return (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-white rounded-2xl p-6 shadow-sm border flex flex-col card-hover ${
                  isFeatured
                    ? "border-gojo-300 ring-1 ring-gojo-200"
                    : "border-ice-100"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                        project.category === "cybersecurity"
                          ? "bg-gojo-50 text-gojo-700"
                          : "bg-emerald-50 text-emerald-600"
                      }`}
                    >
                      {project.category === "cybersecurity"
                        ? "Security"
                        : "Software"}
                    </span>
                    {isFeatured && (
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gojo-600 text-white">
                        Featured
                      </span>
                    )}
                  </div>
                  <svg
                    className="w-4 h-4 text-dark-700/30 group-hover:text-gojo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>

                <h3 className="font-bold text-dark-800 group-hover:text-gojo-600 transition-colors mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-dark-700/60 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-dark-700/40 group-hover:text-gojo-500 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View on GitHub</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
