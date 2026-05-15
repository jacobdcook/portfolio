"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import profile from "../../content/profile.json";

type Category = "all" | "cybersecurity" | "software";

type Project = (typeof profile.projects)[number];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Cybersecurity", value: "cybersecurity" },
  { label: "Software", value: "software" },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export default function Projects() {
  const [active, setActive] = useState<Category>("all");
  const reduceMotion = useReducedMotion();

  const sorted = useMemo(() => {
    const filtered =
      active === "all"
        ? profile.projects
        : profile.projects.filter((p) => p.category === active);
    return [...filtered].sort(
      (a, b) =>
        Number(isFeatured(b)) - Number(isFeatured(a))
    );
  }, [active]);

  const springHover = reduceMotion
    ? undefined
    : {
        y: -4,
        transition: {
          type: "spring" as const,
          stiffness: 100,
          damping: 20,
        },
      };

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 px-6 lg:px-0 bg-canvas-light dark:bg-canvas-dark border-t border-border-light dark:border-border-dark"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 lg:mb-14">
          <h2 className="font-display text-h2 font-bold tracking-tight text-text-primary dark:text-white mb-8">
            Projects
          </h2>

          <div className="flex flex-wrap gap-2 border-b border-border-light dark:border-border-dark pb-4">
            {filters.map((f) => {
              const on = active === f.value;
              return (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setActive(f.value)}
                  className={`px-4 py-2 text-sm font-medium rounded transition-smooth focus-ring outline-none ${
                    on
                      ? "bg-brand-500 text-white"
                      : "bg-transparent text-text-secondary dark:text-white/65 hover:text-brand-600 dark:hover:text-brand-400 border border-transparent hover:border-border-light dark:hover:border-border-dark"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={active}
          className="grid grid-flow-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 xl:auto-rows-fr"
          variants={listVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px", amount: 0.15 }}
        >
          {sorted.map((project) => {
            const featured = isFeatured(project);
            return (
              <motion.a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 100, damping: 20 },
                  },
                }}
                whileHover={springHover}
                className={`group flex flex-col h-full min-h-[11rem] rounded-lg border transition-smooth shadow-[0_1px_0_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-md dark:hover:shadow-none p-6 lg:p-7 bg-white/80 dark:bg-white/[0.04] focus-ring outline-none ${
                  featured
                    ? "md:col-span-2 md:row-span-2 xl:col-span-2 xl:row-span-2 min-h-[17rem] border-2 border-brand-500/40 dark:border-brand-500/30"
                    : "border border-border-light dark:border-border-dark md:col-span-2 xl:col-span-2 xl:row-span-1"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-label uppercase tracking-wide text-text-tertiary dark:text-white/45 font-medium">
                      {project.category === "cybersecurity"
                        ? "Security"
                        : "Software"}
                    </span>
                    {featured ? (
                      <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <GithubLogo
                    size={22}
                    weight="bold"
                    className="text-text-tertiary dark:text-white/45 shrink-0 transition-colors group-hover:text-brand-500"
                    aria-hidden
                  />
                </div>

                <h3 className="font-display text-lg font-semibold tracking-tight text-text-primary dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-3">
                  {project.name}
                </h3>
                <p className="text-sm text-text-secondary dark:text-white/70 leading-relaxed flex-1">
                  {project.description}
                </p>

                <p className="mt-5 text-xs font-mono text-text-tertiary dark:text-white/45 flex items-center gap-2">
                  <span className="underline underline-offset-2 decoration-border-light dark:decoration-border-dark group-hover:decoration-brand-500">
                    View on GitHub
                  </span>
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function isFeatured(project: Project): boolean {
  return "featured" in project && Boolean(project.featured);
}
