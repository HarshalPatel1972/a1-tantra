import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-cream)",
        "deep-brown": "var(--color-deep-brown)",
        "accent-red": "var(--color-accent-red)",
        "soft-gold": "var(--color-soft-gold)",
        "brand-blue": "var(--color-brand-blue)",
        "azure-pulse": "var(--color-azure-pulse)",
        "surface-card": "var(--color-surface-card)",
        "surface-input": "var(--color-surface-input)",
        "surface-nav": "var(--color-surface-nav)",
        "surface-hover": "var(--color-surface-hover)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        nav: ['"ABC Monument Grotesk"', "sans-serif"],
        body: ['"ABC Monument Grotesk"', "sans-serif"],
        title: ['"ABC Marist"', "serif"],
        logo: ['"Vegawanty"', "sans-serif"],
        vegawanty: ['"Vegawanty"', "sans-serif"],
        bigilla: ["var(--font-bigilla)", "Georgia", "serif"],
        brandlogo: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#3F2F27",
            a: {
              color: "#E44426",
              "&:hover": {
                color: "#C93218",
              },
            },
          },
        },
      },
      keyframes: {
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        "blob-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-40px, 30px) scale(0.9)" },
          "66%": { transform: "translate(20px, -30px) scale(1.1)" },
        },
        "blob-reverse": {
          "0%, 100%": { transform: "translate(0, 0) scale(1.1)" },
          "33%": { transform: "translate(50px, 20px) scale(0.9)" },
          "66%": { transform: "translate(-30px, -40px) scale(1.05)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 15s ease infinite",
        blob: "blob 7s infinite",
        "blob-slow": "blob-slow 9s infinite",
        "blob-reverse": "blob-reverse 11s infinite",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [typography],
};

export default config;
