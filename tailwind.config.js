/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      //If you're using the src/ directory
    "./src/**/*.{js,ts,jsx,tsx}",

      //If you're using the default paths:
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}