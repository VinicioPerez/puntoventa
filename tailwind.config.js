/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.config.js",
    "./node_modules/vue-tailwind-datepicker/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'vtd-primary': colors.green,
        // 'secondary': colors.gray[500],
        // 'success': colors.green[500],
        // 'error': colors.red[500],
        // 'warning': colors.yellow[500],
        // 'info': colors.blue[500],
        // 'dark': colors.gray[800],
        // 'light': colors.gray[100],
        // 'white': colors.white,
        // 'black': colors.black,
        // 'gray': colors.gray,
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}

