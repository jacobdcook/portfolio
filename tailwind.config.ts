import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Canvas
        canvas: {
          light: "#F7F6F3",
          dark: "#16161A",
        },
        // Text
        text: {
          primary: "#1A1A1A",
          secondary: "#6B6B68",
          tertiary: "#9B9B98",
        },
        // Accent (Terracotta)
        accent: {
          50: "#FBF3F0",
          100: "#F5E1DC",
          200: "#E8C9B9",
          300: "#DAA896",
          400: "#CC8B73",
          500: "#B8553E",
          600: "#A24430",
          700: "#8F3729",
          800: "#7A2B22",
          900: "#5D1F16",
        },
        // Navy (#202aba) — About section only
        navy: {
          50: "#EEF0FB",
          100: "#D4D8F5",
          200: "#A9B2EB",
          300: "#7E8CE0",
          400: "#5365D6",
          500: "#202ABA",
          600: "#1A2295",
          700: "#141A70",
          800: "#0E124B",
          900: "#080A26",
        },
        // Semantic
        success: "#4B7C5A",
        error: "#9F2F2D",
        warning: "#956400",
        info: "#1F6C9F",
        // Hairlines
        border: {
          light: "#E5E4DF",
          dark: "#2A2A2E",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
        display: [
          "var(--font-cabinet)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      fontSize: {
        // Display
        display: ["48px", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-lg": ["56px", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-xl": ["64px", { lineHeight: "1", letterSpacing: "-0.02em" }],
        // Headings
        h1: ["36px", { fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h2: ["28px", { fontWeight: "700", lineHeight: "1.3", letterSpacing: "-0.01em" }],
        h3: ["20px", { fontWeight: "600", lineHeight: "1.4" }],
        // Body
        base: ["16px", { lineHeight: "1.75" }],
        sm: ["14px", { lineHeight: "1.5" }],
        xs: ["13px", { lineHeight: "1.5" }],
        // Label
        label: ["13px", { fontWeight: "500", letterSpacing: "0.05em" }],
      },
      spacing: {
        section: "6rem",  // py-24 equivalent
        "section-lg": "8rem", // py-32 equivalent
      },
      maxWidth: {
        prose: "65ch",
        container: "1280px",
      },
      transitionTimingFunction: {
        "ease-out-quart": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "fade-up": "fadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
