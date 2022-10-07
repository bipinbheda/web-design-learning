const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat', sans-serif"],
        lato: ["'Lato', sans"],
        raleway: ["'Raleway', sans-serif"]
      },
      colors: {
        'primary': {
          DEFAULT: '#FFBA00',
          '50': '#FFECB8',
          '100': '#FFE6A3',
          '200': '#FFDB7A',
          '300': '#FFD052',
          '400': '#FFC529',
          '500': '#FFBA00',
          '600': '#C79100',
          '700': '#8F6800',
          '800': '#573F00',
          '900': '#1F1600'
        },
        'dark-black': '#444444'
      }
    },
  },
  plugins: [],
}