/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "rgb(175,191,237)",
        primaryPurpleDark: "rgb(108,124,208)",
      },
    },
  },
  plugins: [],
};
