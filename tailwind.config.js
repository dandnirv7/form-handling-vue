/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      minWidth: {
        screen: "100vw",
      },
      spacing: {
        75: "300px",
        150: "600px",
      },
    },
  },
  plugins: [],
};
