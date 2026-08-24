"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GithubLogo, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { navySectionEnd, navyFocusRing } from "@/lib/navySection";
import SectionHeading from "@/components/SectionHeading";
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
    <section id="projects" className={navySectionEnd}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 lg:mb-14">
          <SectionHeading index="04" title="Projects" className="mb-8" />

          <div className="flex flex-wrap gap-2 border-b border-navy-200 dark:border-navy-700 pb-4">
            {filters.map((f) => {
              const on = active === f.value;
              return (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setActive(f.value)}
                  className={`px-4 py-2 text-sm font-medium rounded transition-smooth ${navyFocusRing} ${
                    on
                      ? "bg-navy-500 text-white"
                      : "bg-transparent text-navy-900/75 dark:text-white/65 hover:text-navy-600 dark:hover:text-navy-300 border border-transparent hover:border-navy-200 dark:hover:border-navy-700"
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
                className={`group relative overflow-hidden flex flex-col h-full min-h-[11rem] rounded-lg border transition-smooth shadow-[0_1px_0_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_12px_32px_-12px_rgba(20,26,112,0.25)] dark:hover:shadow-[0_0_28px_-6px_rgba(0,255,65,0.12)] p-6 lg:p-7 bg-white/80 dark:bg-white/[0.04] text-inherit hover:border-navy-500/60 dark:hover:border-neon-500/30 ${navyFocusRing} ${
                  featured
                    ? "md:col-span-2 md:row-span-2 xl:col-span-2 xl:row-span-2 min-h-[17rem] border-2 border-navy-500/40 dark:border-navy-400/30"
                    : "border border-navy-200 dark:border-navy-700 md:col-span-2 xl:col-span-2 xl:row-span-1"
                }`}
              >
                {featured ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-navy-600 via-navy-400 to-navy-300 dark:from-neon-600 dark:via-neon-500 dark:to-navy-400"
                  />
                ) : null}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-label uppercase tracking-wide text-navy-600/90 dark:text-navy-300/90 font-medium">
                      {project.category === "cybersecurity"
                        ? "Security"
                        : "Software"}
                    </span>
                    {featured ? (
                      <span className="text-xs font-semibold uppercase tracking-wide text-navy-600 dark:text-navy-300">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <GithubLogo
                    size={22}
                    weight="bold"
                    className="text-navy-500/60 dark:text-white/45 shrink-0 transition-colors group-hover:text-navy-500"
                    aria-hidden
                  />
                </div>

                <h3 className="font-display text-lg font-semibold tracking-tight text-navy-900 dark:text-white group-hover:text-navy-600 dark:group-hover:text-navy-300 transition-colors mb-3">
                  {project.name}
                </h3>
                <p className="text-sm text-navy-900/75 dark:text-white/70 leading-relaxed flex-1">
                  {project.description}
                </p>

                <p className="mt-5 text-xs font-mono text-navy-700/70 dark:text-white/45 flex items-center gap-1.5 group-hover:text-navy-600 dark:group-hover:text-neon-400 transition-colors">
                  <span className="underline underline-offset-2 decoration-navy-200 dark:decoration-navy-700 group-hover:decoration-navy-500 dark:group-hover:decoration-neon-500/60">
                    View on GitHub
                  </span>
                  <ArrowUpRight
                    size={14}
                    weight="bold"
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
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
