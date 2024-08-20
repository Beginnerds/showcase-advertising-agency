/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#e7e7e7",
        primary: "#ffffff",
        accent: "#202020",
      },
      fontFamily: {
        primary: ["Nunito", "sans-serif"],
        secondary: ["Kalam", "cursive"],
      },
    },
  },
  plugins: [],
};
