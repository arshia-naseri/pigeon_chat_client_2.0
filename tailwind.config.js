/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "rgb(175,191,237)",
        primaryPurpleDark: "rgb(108,124,208)",
        primaryPurpleLight: "#E6EDF9",
        primaryPurpleDark2: "#262B49",
        primaryPurpleLight_half: "#D1D6F0",
        offWhite: "#F5F5F5",
      },
      fontFamily: {
        cartoonish: ["WelcomeFancyTitle", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
