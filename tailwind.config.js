/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F9FA",
        obsidian: "#0F172A",
        champagne: {
          DEFAULT: "#D4AF37",
          light: "#F3E5AB",
          dark: "#B8860B",
        },
        gold: {
          50: "#FFFDF0",
          100: "#FFF9C4",
          500: "#D4AF37",
          600: "#B8860B",
        },
        emerald: {
          accent: "#0D9488",
          hover: "#0F766E",
          light: "#CCFBF1",
        },
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(212, 175, 55, 0.08), 0 10px 20px -5px rgba(0, 0, 0, 0.04)",
        cardHover: "0 30px 60px -12px rgba(15, 23, 42, 0.12), 0 18px 36px -18px rgba(212, 175, 55, 0.2)",
      },
    },
  },
  plugins: [],
};
