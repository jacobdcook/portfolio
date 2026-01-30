"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import profile from "../../content/profile.json";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [mounted, setMounted] = useState(false);
  const fullText = profile.heroGreeting;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [fullText, mounted]);

  const finalText = displayText || fullText;

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 pt-20 pb-12 hero-gradient">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-800 dark:text-white mb-4 animate-fade-in-up min-h-[1.2em]">
            {finalText}
            <span className="cursor-blink text-gojo-500">|</span>
          </h1>
          <p className="text-lg sm:text-xl text-dark-700/70 dark:text-white/60 mb-8 max-w-xl animate-fade-in-up-delay-1 text-balance">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up-delay-2">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-gojo-600 text-white font-semibold rounded-full hover:bg-gojo-700 transition-all shadow-lg shadow-gojo-600/25 hover:shadow-xl hover:shadow-gojo-600/30 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3.5 bg-white dark:bg-dark-800 text-dark-800 dark:text-white font-semibold rounded-full border-2 border-dark-800/10 dark:border-white/10 hover:border-gojo-500 dark:hover:border-gojo-400 hover:text-gojo-600 dark:hover:text-gojo-400 transition-all hover:-translate-y-0.5"
            >
              View My Projects
            </a>
          </div>
        </div>

        {/* Headshot */}
        <div className="flex-shrink-0 animate-float">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gojo-400 to-gojo-600 blur-2xl opacity-20 dark:opacity-30 scale-110" />
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-gojo-300/50 ring-offset-4 ring-offset-frost dark:ring-offset-dark-900 shadow-2xl">
              <Image
                src={profile.headshotPath}
                alt={`${profile.name} headshot`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
