/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      Vazir: "Vazir",
    },
    extend: {
      rotate: {
        '360': '360deg',
      },
      spacing: {
        '8px': '2rem',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
