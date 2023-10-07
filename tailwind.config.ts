/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scrollText: "scrollText 21s linear infinite",
        fadeIn: "fadeIn .6s ease-in-out forwards",
      },
      keyframes: {
        scrollText: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          content: "hsl(var(--primary-content))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          content: "hsl(var(--secondary-content))",
        },
        accent: "hsl(var(--accent))",
        yellow: "hsl(var(--yellow))",
        blue: "hsl(var(--blue))",
        black: "hsl(var(--black))",
        white: "hsl(var(--white))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
