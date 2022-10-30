/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["index.html","./assets/js/custom.js"],
  theme: {
    extend: {
      colors:{
        'black': '#333333',
        // 'white': '#f6f7fb',
        'gray' : {
          300 : "#6b6c70",
          400 : "#777",
        }
      },
      spacing: {
        '7.5': '30px',
        '8.5': '34px',
        '112': '448px'
      },
      fontSize: {
        sm: ['14px', '20px'],
        '15px': ['15px', '20px']
      }
    },
    fontFamily: {
      'sans': ['"ITC Avant Garde Gothic Std Demi"', ...defaultTheme.fontFamily.sans],
      'dosis' : ['dosis']
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}
