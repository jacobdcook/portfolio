"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import profile from "../../content/profile.json";

type Token = { text: string; className: string };

const KEY = "text-navy-600 dark:text-neon-500 font-bold";
const VALUE = "text-text-primary/85 dark:text-white/80";
const DIM = "text-text-secondary dark:text-white/50";
const CRITICAL = "text-accent-500 dark:text-accent-400 font-bold";

const SIGMA_LINES: Token[][] = [
  [
    { text: "title", className: KEY },
    { text: ": MFA Fatigue Attack", className: VALUE },
  ],
  [
    { text: "status", className: KEY },
    { text: ": production", className: VALUE },
  ],
  [{ text: "logsource", className: KEY }, { text: ":", className: VALUE }],
  [
    { text: "  product", className: KEY },
    { text: ": okta", className: VALUE },
  ],
  [
    { text: "  service", className: KEY },
    { text: ": authentication", className: VALUE },
  ],
  [{ text: "detection", className: KEY }, { text: ":", className: VALUE }],
  [
    { text: "  push_spam", className: KEY },
    { text: ":", className: VALUE },
  ],
  [
    { text: "    eventType", className: KEY },
    { text: ": system.push.send_factor_verify_push", className: VALUE },
  ],
  [
    { text: "    timeframe", className: KEY },
    { text: ": 10m", className: VALUE },
  ],
  [
    { text: "  approval", className: KEY },
    { text: ":", className: VALUE },
  ],
  [
    { text: "    eventType", className: KEY },
    { text: ": user.authentication.auth_via_mfa", className: VALUE },
  ],
  [
    { text: "  condition", className: KEY },
    { text: ": push_spam | count() >= 5", className: VALUE },
  ],
  [
    { text: "falsepositives", className: KEY },
    { text: ":", className: VALUE },
  ],
  [
    { text: "  - Legitimate user retrying failed pushes", className: DIM },
  ],
  [
    { text: "level", className: KEY },
    { text: ": ", className: VALUE },
    { text: "critical", className: CRITICAL },
  ],
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const certCount = profile.education.filter((e) => e.icon === "cert").length;
  const projectCount = profile.projects.length;

  const childProps = reduceMotion
    ? { initial: false, animate: {} }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: spring,
      };

  const terminalList = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.09, delayChildren: 0.5 },
    },
  };

  const terminalLine = {
    hidden: { opacity: 0, x: -6 },
    visible: {
      opacity: 1,
      x: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.18 },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[100dvh] flex flex-col justify-center px-6 lg:px-0 pt-24 pb-16 md:pt-28 md:pb-24 bg-canvas-light dark:bg-canvas-dark overflow-hidden"
    >
      {/* Backdrop: blueprint grid + glows */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-hero [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,black,transparent)]" />
        <div className="absolute -top-40 right-[8%] w-[34rem] h-[34rem] rounded-full bg-navy-500/10 dark:bg-neon-500/[0.05] blur-3xl" />
        <div className="absolute -bottom-24 left-[4%] w-[28rem] h-[28rem] rounded-full bg-accent-500/[0.06] dark:bg-navy-500/15 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid gap-12 lg:gap-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-6 lg:gap-8">
          <motion.p {...childProps} className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-success/30 dark:border-neon-500/25 bg-success/[0.06] dark:bg-neon-500/[0.06] text-xs sm:text-sm font-mono font-medium text-success dark:text-neon-500">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success dark:bg-neon-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success dark:bg-neon-500" />
              </span>
              {profile.availability}
            </span>
          </motion.p>

          <motion.h1
            {...childProps}
            transition={reduceMotion ? undefined : { ...spring, delay: 0.04 }}
            className="font-display text-display sm:text-display-lg xl:text-display-xl font-bold tracking-tighter text-text-primary dark:text-white text-balance leading-[1.05]"
          >
            {profile.heroGreetingPrefix}{" "}
            <span className="bg-gradient-to-r from-navy-500 to-accent-500 dark:from-neon-300 dark:to-neon-600 bg-clip-text text-transparent">
              {profile.heroGreetingHighlight}
            </span>{" "}
            {profile.heroGreetingSuffix}
          </motion.h1>

          <motion.p
            {...childProps}
            transition={reduceMotion ? undefined : { ...spring, delay: 0.08 }}
            className="text-lg sm:text-xl text-text-secondary dark:text-white/65 max-w-[42rem] leading-relaxed text-balance"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            {...childProps}
            transition={reduceMotion ? undefined : { ...spring, delay: 0.12 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-accent-500 text-white font-semibold text-base transition-smooth hover:bg-accent-600 hover:scale-[1.02] active:scale-[0.98] active:translate-y-px focus-ring shadow-[0_8px_24px_-8px_rgba(186,32,32,0.5)]"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded border-2 border-border-light dark:border-border-dark bg-transparent text-text-primary dark:text-white font-semibold text-base transition-smooth hover:border-accent-500 hover:text-accent-500 dark:hover:border-neon-500/60 dark:hover:text-neon-500 hover:scale-[1.02] active:scale-[0.98] focus-ring"
            >
              View projects
            </a>
          </motion.div>

          <motion.dl
            {...childProps}
            transition={reduceMotion ? undefined : { ...spring, delay: 0.16 }}
            className="flex flex-wrap gap-x-10 gap-y-4 pt-2 font-mono"
          >
            <div>
              <dt className="sr-only">CompTIA certifications</dt>
              <dd className="text-2xl font-bold text-text-primary dark:text-neon-500 tabular-nums">
                {String(certCount).padStart(2, "0")}
              </dd>
              <dd className="text-xs uppercase tracking-wide text-text-tertiary dark:text-white/45 mt-1">
                CompTIA certs
              </dd>
            </div>
            <div>
              <dt className="sr-only">Public security projects</dt>
              <dd className="text-2xl font-bold text-text-primary dark:text-neon-500 tabular-nums">
                {projectCount}+
              </dd>
              <dd className="text-xs uppercase tracking-wide text-text-tertiary dark:text-white/45 mt-1">
                Public projects
              </dd>
            </div>
            <div>
              <dt className="sr-only">Master of Science in Cybersecurity</dt>
              <dd className="text-2xl font-bold text-text-primary dark:text-neon-500 tabular-nums">
                MS
              </dd>
              <dd className="text-xs uppercase tracking-wide text-text-tertiary dark:text-white/45 mt-1">
                Cybersecurity · 2026
              </dd>
            </div>
          </motion.dl>
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
            <div className="relative h-full w-full overflow-hidden rounded-full ring-[3px] ring-accent-500/25 dark:ring-neon-500/25 ring-offset-[3px] ring-offset-canvas-light dark:ring-offset-canvas-dark shadow-md">
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

          <div className="w-full min-w-0 terminal-frame">
            <div className="terminal-titlebar">
              <span aria-hidden className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </span>
              <span className="flex-1 text-center font-mono text-xs text-text-secondary dark:text-white/50 truncate">
                mfa_fatigue_attack.yml — sigma
              </span>
            </div>
            <motion.pre
              variants={terminalList}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              className="font-mono text-xs sm:text-sm leading-relaxed p-5 sm:p-6 overflow-x-auto whitespace-pre text-left"
              aria-label="Sigma rule excerpt: MFA fatigue attack detection"
            >
              {SIGMA_LINES.map((line, i) => (
                <motion.span key={i} variants={terminalLine} className="block">
                  {line.map((token, j) => (
                    <span key={j} className={token.className}>
                      {token.text}
                    </span>
                  ))}
                </motion.span>
              ))}
              <motion.span variants={terminalLine} className="block mt-2">
                <span className="text-navy-600 dark:text-neon-500 font-bold">
                  ❯{" "}
                </span>
                <span
                  aria-hidden
                  className="terminal-cursor inline-block w-[0.55em] h-[1.05em] align-text-bottom bg-navy-600 dark:bg-neon-500"
                />
              </motion.span>
            </motion.pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
