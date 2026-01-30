"use client";

import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "About me", href: "#about", section: "about" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "My Projects", href: "#projects", section: "projects" },
  { label: "Resume", href: "/resume.pdf", section: "" },
  { label: "Get in Touch", href: "#contact", section: "contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-frost/90 dark:bg-dark-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold text-dark-800 dark:text-white hover:text-gojo-500 transition-colors"
        >
          Jacob Cook
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isExternal =
              link.href.startsWith("/") || link.href.startsWith("http");
            const isActive = link.section && activeSection === link.section;
            return (
              <a
                key={link.href}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`text-sm font-medium transition-all relative ${
                  link.label === "Resume"
                    ? "font-semibold px-4 py-2 rounded-full bg-gojo-600 text-white hover:bg-gojo-700"
                    : isActive
                    ? "text-gojo-600 dark:text-gojo-400"
                    : "text-dark-700/70 dark:text-white/60 hover:text-gojo-500 dark:hover:text-gojo-400"
                }`}
              >
                {link.label}
                {isActive && link.label !== "Resume" && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gojo-500 rounded-full" />
                )}
              </a>
            );
          })}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full flex items-center justify-center text-dark-700/70 dark:text-white/60 hover:text-gojo-500 dark:hover:text-gojo-400 hover:bg-ice-100 dark:hover:bg-dark-700 transition-all"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full flex items-center justify-center text-dark-700/70 dark:text-white/60 hover:text-gojo-500 dark:hover:text-gojo-400 transition-all"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-dark-800 dark:bg-white transition-transform ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-dark-800 dark:bg-white transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-dark-800 dark:bg-white transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-frost/95 dark:bg-dark-900/95 backdrop-blur-md border-t border-ice-100 dark:border-dark-600 px-6 pb-6 pt-2">
          {navLinks.map((link) => {
            const isExternal =
              link.href.startsWith("/") || link.href.startsWith("http");
            return (
              <a
                key={link.href}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`block py-3 transition-colors font-medium ${
                  link.label === "Resume"
                    ? "text-center mt-2 rounded-full bg-gojo-600 text-white hover:bg-gojo-700"
                    : "text-dark-700 dark:text-white/70 hover:text-gojo-500 dark:hover:text-gojo-400"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
