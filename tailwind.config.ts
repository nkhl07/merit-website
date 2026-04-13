import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#861F41",
          50: "#fdf2f5",
          100: "#fce7ed",
          200: "#f9d0dc",
          300: "#f4a8be",
          400: "#ec749a",
          500: "#e04f7a",
          600: "#cc2f5c",
          700: "#ac2048",
          800: "#861F41",
          900: "#731a37",
          950: "#43091d",
        },
        orange: {
          DEFAULT: "#E5751F",
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#E5751F",
          600: "#c2611a",
          700: "#a04d16",
          800: "#7c3a10",
          900: "#58290b",
          950: "#3a1a07",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
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
