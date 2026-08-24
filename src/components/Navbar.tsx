"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/context/ThemeContext";
import profile from "../../content/profile.json";

const navLinks = [
  { label: "About", href: "#about", section: "about" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "Projects", href: "#projects", section: "projects" },
  { label: "Resume", href: "/resume.pdf", section: "", isExternal: true },
  { label: "Contact", href: "#contact", section: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-canvas-light/90 dark:bg-canvas-dark/90 backdrop-blur border-b border-border-light dark:border-border-dark shadow-sm"
          : "bg-transparent"
      }`}
    >
      <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-6 focus:px-4 focus:py-2 focus:bg-navy-500 focus:text-white focus:rounded focus:z-50">
        Skip to main content
      </a>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label={`${profile.name}, back to top`}
          title={profile.name}
          className="font-mono text-base font-bold tracking-tight px-1.5 py-1 rounded text-text-primary dark:text-white hover:text-navy-600 dark:hover:text-neon-400 transition-colors focus-ring"
        >
          <span className="text-navy-500 dark:text-neon-500" aria-hidden>
            ❯{" "}
          </span>
          jc
          <span
            aria-hidden
            className="terminal-cursor inline-block w-[0.5em] h-[1.05em] ml-1 align-text-bottom bg-navy-500 dark:bg-neon-500"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.section && activeSection === link.section;
            return (
              <a
                key={link.href}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className={`text-sm font-medium transition-colors ${
                  link.isExternal
                    ? "px-4 py-2 rounded bg-navy-500 text-white hover:bg-navy-600 dark:bg-neon-500 dark:text-canvas-dark dark:hover:bg-neon-400 shadow-[0_4px_16px_-4px_rgba(32,42,186,0.45)] dark:shadow-[0_4px_16px_-4px_rgba(0,255,65,0.3)]"
                    : isActive
                    ? "text-navy-600 dark:text-neon-400 border-b-2 border-navy-500 dark:border-neon-500"
                    : "text-text-secondary dark:text-white/70 hover:text-navy-600 dark:hover:text-neon-400"
                }`}
              >
                {link.label}
              </a>
            );
          })}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex items-center justify-center text-text-secondary dark:text-white/70 hover:text-navy-600 dark:hover:text-neon-400 focus-ring"
          >
            {theme === "dark" ? (
              <Sun size={20} weight="bold" />
            ) : (
              <Moon size={20} weight="bold" />
            )}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex items-center justify-center text-text-secondary dark:text-white/70 hover:text-navy-600 dark:hover:text-neon-400 focus-ring"
          >
            {theme === "dark" ? (
              <Sun size={20} weight="bold" />
            ) : (
              <Moon size={20} weight="bold" />
            )}
          </button>

          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-text-primary dark:bg-white transition-transform ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-primary dark:bg-white transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-primary dark:bg-white transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-canvas-light/95 dark:bg-canvas-dark/95 backdrop-blur border-t border-border-light dark:border-border-dark px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className={`block py-3 transition-colors font-medium ${
                link.isExternal
                  ? "mt-2 px-4 py-2 rounded bg-navy-500 text-white hover:bg-navy-600 dark:bg-neon-500 dark:text-canvas-dark dark:hover:bg-neon-400 text-center"
                  : "text-text-primary dark:text-white/70 hover:text-navy-600 dark:hover:text-neon-400"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
