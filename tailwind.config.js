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
        obsidian: "#0B0F19",
        champagne: {
          DEFAULT: "#D4AF37",
          light: "#F3E5AB",
          dark: "#B8860B",
        },
        emerald: {
          accent: "#0D9488",
          hover: "#0F766E",
          light: "#CCFBF1",
        },
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(212, 175, 55, 0.12), 0 10px 20px -5px rgba(11, 15, 25, 0.05)",
        cardHover: "0 35px 70px -15px rgba(11, 15, 25, 0.18), 0 20px 40px -20px rgba(212, 175, 55, 0.25)",
        glow: "0 0 35px rgba(212, 175, 55, 0.35)",
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
