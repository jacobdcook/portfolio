"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "My Projects", href: "#projects" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Get in Touch", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-frost/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold text-dark-800 hover:text-gojo-500 transition-colors"
        >
          Jacob Cook
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") || link.href.startsWith("/") ? "_blank" : undefined}
              rel={link.href.startsWith("http") || link.href.startsWith("/") ? "noopener noreferrer" : undefined}
              className={`text-sm font-medium transition-colors ${
                link.label === "Resume"
                  ? "font-semibold px-4 py-2 rounded-full bg-gojo-600 text-white hover:bg-gojo-700"
                  : "text-dark-700/70 hover:text-gojo-500"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-dark-800 transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-dark-800 transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-dark-800 transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-frost/95 backdrop-blur-md border-t border-ice-100 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") || link.href.startsWith("/") ? "_blank" : undefined}
              rel={link.href.startsWith("http") || link.href.startsWith("/") ? "noopener noreferrer" : undefined}
              className={`block py-3 transition-colors font-medium ${
                link.label === "Resume"
                  ? "text-center mt-2 rounded-full bg-gojo-600 text-white hover:bg-gojo-700"
                  : "text-dark-700 hover:text-gojo-500"
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
