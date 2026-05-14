"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import profile from "../../content/profile.json";

const SIGMA_SNIPPET = `title: Suspicious encoded PowerShell
status: experimental
logsource:
  category: process_creation
  product: windows
detection:
  selection:
    CommandLine|contains|all:
      - "powershell"
      - " -e"
      - "JAB"
  condition: selection
falsepositives:
  - Rare admin scripts using -enc
level: medium`;

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const childProps = reduceMotion
    ? { initial: false, animate: {} }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: spring,
      };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="min-h-[100dvh] flex flex-col justify-center px-6 lg:px-0 pt-24 pb-16 md:pt-28 md:pb-24 bg-canvas-light dark:bg-canvas-dark"
    >
      <div className="max-w-6xl mx-auto w-full grid gap-12 lg:gap-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-6 lg:gap-8">
          <motion.h1
            {...childProps}
            className="font-display text-display sm:text-display-lg xl:text-display-xl font-bold tracking-tighter text-text-primary dark:text-white text-balance leading-none"
          >
            {profile.heroGreeting}
          </motion.h1>
          <motion.p
            {...childProps}
            transition={
              reduceMotion ? undefined : { ...spring, delay: 0.06 }
            }
            className="text-lg sm:text-xl text-text-secondary dark:text-white/65 max-w-[42rem] leading-relaxed text-balance"
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            {...childProps}
            transition={
              reduceMotion ? undefined : { ...spring, delay: 0.12 }
            }
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-accent-500 text-white font-semibold text-base transition-smooth hover:bg-accent-600 hover:scale-[1.02] active:scale-[0.98] active:translate-y-px focus-ring"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded border-2 border-border-light dark:border-border-dark bg-transparent text-text-primary dark:text-white font-semibold text-base transition-smooth hover:border-accent-500 hover:text-accent-500 dark:hover:text-accent-400 hover:scale-[1.02] active:scale-[0.98] focus-ring"
            >
              View projects
            </a>
          </motion.div>
        </div>

        <motion.div
          {...(reduceMotion
            ? { initial: false, animate: {} }
            : {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { ...spring, delay: 0.08 },
              })}
          className="lg:col-span-6 xl:col-span-5 min-w-0 flex flex-col items-center gap-8"
        >
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 shrink-0">
            <div className="relative h-full w-full overflow-hidden rounded-full ring-[3px] ring-accent-500/25 ring-offset-[3px] ring-offset-canvas-light dark:ring-offset-canvas-dark shadow-md">
              <Image
                src={profile.headshotPath}
                alt={`Portrait of ${profile.name}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 176px, 208px"
                priority
              />
            </div>
          </div>

          <div className="w-full min-w-0">
            <pre
              className="font-mono text-xs sm:text-sm leading-relaxed p-5 sm:p-6 rounded-lg border border-border-light dark:border-border-dark bg-white/70 dark:bg-white/[0.04] text-text-primary dark:text-white/90 overflow-x-auto whitespace-pre shadow-[0_1px_0_rgba(0,0,0,0.04)] dark:shadow-none text-left"
            >
              {SIGMA_SNIPPET}
            </pre>
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-text-tertiary dark:text-white/45">
              Sigma rule excerpt
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
