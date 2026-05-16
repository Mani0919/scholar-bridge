import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12"
        },
        accent: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#64748b",
          500: "#111827",
          600: "#030712",
          700: "#020617",
          800: "#020617",
          900: "#000000"
        }
      },
      borderRadius: {
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(15, 23, 42, 0.10)",
        card: "0 16px 40px rgba(15, 23, 42, 0.12)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top left, rgba(249, 115, 22, 0.20), transparent 58%), radial-gradient(circle at 30% 20%, rgba(15, 23, 42, 0.10), transparent 46%)",
        "cta-gradient": "linear-gradient(135deg, #111827 0%, #f97316 100%)"
      }
    }
  },
  plugins: []
};

export default config;
