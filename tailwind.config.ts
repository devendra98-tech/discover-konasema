import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app-konaseema/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Andhra Pradesh theme
        godavari: {
          blue: "#1e3a8a",
          "blue-light": "#3b82f6",
          "blue-dark": "#1e40af",
          gold: "#fbbf24",
          "gold-light": "#fcd34d",
          "gold-dark": "#d97706",
        },
        // Konaseema theme (direct access)
        "godavari-blue": {
          DEFAULT: "#1e3a8a",
          light: "#3b82f6",
          dark: "#1e40af",
        },
        "konaseema-gold": {
          DEFAULT: "#fbbf24",
          light: "#fcd34d",
          dark: "#d97706",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in",
        "slide-up": "slideUp 0.6s ease-out",
        "zoom-in": "zoomIn 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;


