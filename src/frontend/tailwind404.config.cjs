/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/404.html",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "var(--primary-color)",
        // secondary: "var(--secondary-color)",
        // accent: "var(--accent-color)",
        primary: "rgb(var(--primary-color) / <alpha-value>)",
        secondary: "rgb(var(--secondary-color) / <alpha-value>)",
        accent: "rgb(var(--accent-color) / <alpha-value>)",
      }
    },
  },
  plugins: [],
}
