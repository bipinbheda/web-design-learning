const defaultTheme = require('tailwindcss/defaultTheme');
// console.log(defaultTheme.spacing[8]);
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'lora': ['Lora', 'serif'],
      },
      colors: {
        // primary: '#5c6ac4',
        secondary: '#6d6671',
        'green': {
          DEFAULT: '#B8CA36',  
        },
        'blue': {
          DEFAULT: '#1b7091',
          '200': "#e2edf1",
          '600': "#114f67",
          '700': "#114f67",
        },
      },
      fontSize: {
        'sm': ['15px', {
          lineHeight: '2rem',
          letterSpacing: '-.3px',
        }],
        'md':['17px', {
          lineHeight: defaultTheme.spacing[8],
          letterSpacing: '-0.34px',
        }], 
        'lg':['19px', {
          lineHeight: defaultTheme.spacing[10],
          letterSpacing: '-0.38px',
        }] 
      },
      spacing: {
        '15': '3.75rem',
        '39': '9.75rem'
      },
      lineHeight: {
        '16': '4rem'
      },
      boxShadow: {
        '5xl': '0px 0px 50px rgba(0, 0, 0, 0.2)',
        '4xl': '0px 0px 40px rgba(0, 0, 0, 0.2)',
      }
    },
    container: {
      center: true,
      padding: '0.5rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1170px',
      },
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
  },
  plugins: [
    // require('tailwind-children')
    // require('@tailwindcss/forms')
  ],
}