/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {},
};
