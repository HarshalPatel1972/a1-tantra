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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
