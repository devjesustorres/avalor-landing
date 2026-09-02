import type { Config } from "tailwindcss";
import { heroui } from "@heroui/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      colors: {
        neu: {
          base: "#e8edf3",
          light: "#ffffff",
          dark: "#cad5e2",
          surface: "#edf2f8",
        },
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      boxShadow: {
        "neu-flat": "9px 9px 20px #cad5e2, -9px -9px 20px #ffffff",
        "neu-flat-sm": "5px 5px 12px #cbd6e4, -5px -5px 12px #ffffff",
        "neu-flat-lg": "14px 14px 28px #cad5e3, -14px -14px 28px #ffffff",
        "neu-inset": "inset 4px 4px 8px #cad5e2, inset -4px -4px 8px #ffffff",
        "neu-inset-sm": "inset 2px 2px 5px #cad5e2, inset -2px -2px 5px #ffffff",
        "neu-pill": "0 18px 36px -10px rgba(160, 175, 195, 0.4), -4px -4px 14px #ffffff",
        "neu-btn-blue": "0 10px 24px -4px rgba(37, 99, 235, 0.45), 5px 5px 14px #cad5e2, -5px -5px 14px #ffffff",
        "neu-btn-blue-active": "inset 3px 3px 6px rgba(0, 0, 0, 0.25), inset -3px -3px 6px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#2563eb",
              foreground: "#ffffff",
            },
            background: "#e8edf3",
          },
        },
      },
    }),
  ],
};

export default config;

