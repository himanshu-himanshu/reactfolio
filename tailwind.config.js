/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Alegreya: ["Alegreya", "serif"],
        Sacramento: ["'Sacramento', cursive"],
        Raleway: ["'Raleway', sans-serif"],
      },
      colors: {
        primary: "#0a192f",
      },
    },
  },
  plugins: [],
};
