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
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#4f46e5",
          600: "#4338ca",
          700: "#3730a3"
        },
        accent: {
          500: "#7c3aed",
          600: "#6d28d9"
        }
      },
      borderRadius: {
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(15, 23, 42, 0.12)",
        card: "0 16px 40px rgba(15, 23, 42, 0.12)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top left, rgba(79, 70, 229, 0.25), transparent 60%), radial-gradient(circle at 30% 20%, rgba(124, 58, 237, 0.18), transparent 50%)",
        "cta-gradient": "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
      }
    }
  },
  plugins: []
};

export default config;
