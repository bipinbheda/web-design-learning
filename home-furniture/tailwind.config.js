const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

// require('tailwindcss');
// require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'black-jack': ['"Black Jack"'],
        'barlow': ['Barlow', 'sans-serif'],
        'baskervville': ['Baskervville', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'twine': {
          DEFAULT: '#CB9E61',
          '50': '#EEE0CC',
          '100': '#E9D7BD',
          '200': '#DFC49E',
          '300': '#D5B180',
          '400': '#CB9E61',
          '500': '#B8833C',
          '600': '#8D652F',
          '700': '#634721',
          '800': '#392913',
          '900': '#0F0A05'
        },
        'gray': {
          DEFAULT: '#929496',
          '50': '#F0F0F0',
          '100': '#E5E6E6',
          '200': '#D0D1D2',
          '300': '#BCBDBE',
          '400': '#A7A8AA',
          '500': '#929496',
          '600': '#8c8c8c', // Custom
          '700': '#8b8b8b', // Custom
          '800': '#3F4041',
          '900': '#232424'
        },
      },
      screens: {
        'xs': '375px',
      },
    }
  },
  plugins: [
    tailwindcss,
    autoprefixer
  ],
}