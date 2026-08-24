import Link from "next/link";

export const metadata = {
  title: "404 – Jacob Cook",
};

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] flex items-center justify-center px-6 bg-canvas-light dark:bg-canvas-dark">
      <div className="w-full max-w-xl">
        <div className="terminal-frame">
          <div className="terminal-titlebar">
            <span aria-hidden className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </span>
            <span className="flex-1 text-center font-mono text-xs text-text-secondary dark:text-white/50">
              404 — zsh
            </span>
          </div>
          <div className="font-mono text-sm sm:text-base leading-relaxed p-6 sm:p-8">
            <p>
              <span className="text-navy-600 dark:text-neon-500 font-bold">
                ❯{" "}
              </span>
              <span className="text-text-primary/85 dark:text-white/80">
                cat {"{requested_page}"}
              </span>
            </p>
            <p className="text-accent-500 dark:text-accent-400 mt-1">
              cat: no such file or directory (404)
            </p>
            <p className="mt-4">
              <span className="text-navy-600 dark:text-neon-500 font-bold">
                ❯{" "}
              </span>
              <span className="text-text-primary/85 dark:text-white/80">
                cd ~
              </span>
            </p>
            <p className="mt-4">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-2.5 rounded bg-navy-500 text-white dark:bg-neon-500 dark:text-canvas-dark font-semibold no-underline transition-smooth hover:bg-navy-600 dark:hover:bg-neon-400 focus-ring"
              >
                Back to home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
