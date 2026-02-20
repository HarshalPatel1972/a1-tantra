import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF0DF",
        "deep-brown": "#3F2F27",
        "accent-red": "#E44426",
        "soft-gold": "#D4AF37",
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
        "chakra-pulse": {
          "0%, 100%": {
            opacity: "0.3",
            transform: "scale(1.1) rotate(0deg)",
            filter: "blur(15px)",
          },
          "50%": {
            opacity: "0.5",
            transform: "scale(1.2) rotate(10deg)",
            filter: "blur(30px)",
          },
        },
        "aura-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "aura-breathe": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1) blur(10px)" },
          "50%": { opacity: "0.7", transform: "scale(1.05) blur(20px)" },
        },
        "shimmer-sweep": {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(150%) skewX(-20deg)" },
        },
        "float-particle": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "50%": { opacity: "0.8" },
          "100%": { transform: "translateY(-40px) scale(0)", opacity: "0" },
        },
        "spirit-ring": {
          "0%": { transform: "scale(0.8)", opacity: "1", borderWeight: "2px" },
          "100%": { transform: "scale(1.5)", opacity: "0", borderWeight: "0px" },
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
        "chakra-pulse": "chakra-pulse 10s ease-in-out infinite",
        "aura-spin": "aura-spin 12s linear infinite",
        "aura-breathe": "aura-breathe 4s ease-in-out infinite",
        "shimmer-sweep": "shimmer-sweep 2.5s ease-in-out infinite",
        "float-particle": "float-particle 2s ease-out infinite",
        "spirit-ring": "spirit-ring 2s cubic-bezier(0.19, 1, 0.22, 1) infinite",
      },
    },
  },
  plugins: [typography],
};

export default config;
