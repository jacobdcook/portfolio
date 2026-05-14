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

  const initials = profile.name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

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
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label={`${profile.name}, back to top`}
          title={profile.name}
          className="font-mono text-sm font-bold tracking-tight tabular-nums px-2 py-1 rounded border border-border-light dark:border-border-dark text-text-primary dark:text-white hover:border-accent-500 hover:text-accent-500 transition-colors focus-ring"
        >
          {initials}
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
                    ? "px-4 py-2 border border-border-light dark:border-border-dark text-text-primary dark:text-white hover:border-accent-500 hover:text-accent-500"
                    : isActive
                    ? "text-accent-500 border-b-2 border-accent-500"
                    : "text-text-secondary dark:text-white/70 hover:text-accent-500"
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
            className="flex items-center justify-center text-text-secondary dark:text-white/70 hover:text-accent-500 focus-ring"
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
            className="flex items-center justify-center text-text-secondary dark:text-white/70 hover:text-accent-500 focus-ring"
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
                  ? "mt-2 px-4 py-2 border border-border-light dark:border-border-dark text-text-primary dark:text-white hover:border-accent-500 hover:text-accent-500 text-center"
                  : "text-text-primary dark:text-white/70 hover:text-accent-500"
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
