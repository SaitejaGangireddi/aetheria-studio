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
        ivory: "#FAFAFC",
        obsidian: "#0F172A",
        champagne: {
          DEFAULT: "#D4AF37",
          dark: "#B8860B",
        },
        emerald: {
          accent: "#0D9488",
        },
      },
      boxShadow: {
        bento: "0 20px 40px -15px rgba(15, 23, 42, 0.05), 0 10px 25px -10px rgba(0, 0, 0, 0.03)",
        bentoHover: "0 30px 60px -15px rgba(15, 23, 42, 0.12), 0 15px 30px -10px rgba(212, 175, 55, 0.2)",
      },
    },
  },
  plugins: [],
};
