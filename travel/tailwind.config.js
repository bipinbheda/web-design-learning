module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: '#232323',
        white: '#e9e7e7'
      },
      fontSize: {
        '11xl': ['5rem', {
          lineHeight: '1.5',
          fontWeight: '400',
          letterSpacing: '0.01em'
        }]
      }
    },
    fontFamily: {
      cardo: ["'Cardo', serif;"],
      lato: ["'Lato', sans-serif"],
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}