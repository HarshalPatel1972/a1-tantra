import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F2E8",
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
      },
      animation: {
        "gradient-shift": "gradient-shift 15s ease infinite",
        blob: "blob 7s infinite",
        "blob-slow": "blob-slow 9s infinite",
        "blob-reverse": "blob-reverse 11s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
