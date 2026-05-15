"use client";

import { GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react/dist/ssr";
import profile from "../../content/profile.json";

export default function Footer() {
  return (
    <footer className="border-t border-border-light dark:border-border-dark bg-canvas-light dark:bg-canvas-dark text-text-secondary dark:text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          {/* Left: identity */}
          <div>
            <p className="text-sm font-medium text-text-primary dark:text-white">
              Portfolio
            </p>
            <p className="text-xs text-text-tertiary dark:text-white/50 mt-2">
              Detection engineering · {profile.location}
            </p>
          </div>

          {/* Right: socials */}
          <div className="flex items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent-500 transition-colors focus-ring p-2"
            >
              <GithubLogo size={20} weight="bold" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent-500 transition-colors focus-ring p-2"
            >
              <LinkedinLogo size={20} weight="bold" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hover:text-accent-500 transition-colors focus-ring p-2"
            >
              <Envelope size={20} weight="bold" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-light dark:border-border-dark my-6" />

        {/* Bottom: copyright + legal */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent-500 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
