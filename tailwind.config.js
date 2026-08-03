/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0C10",
        charcoal: "#1F2833",
        champagne: {
          DEFAULT: "#D4AF37",
          light: "#E5C158",
          dark: "#A38423",
        },
        platinum: "#C0C0C0",
        emerald: {
          accent: "#45B69C",
          hover: "#399983",
        },
      },
    },
  },
  plugins: [],
};
