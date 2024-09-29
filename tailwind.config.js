/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        carnation: 'hsl(0, 94%, 66%)',
        royalBlue: 'hsl(231, 69%, 60%)',
        mischka: 'hsl(216, 12%, 84%)',
        ebonyClay: 'hsl(229, 31%, 21%)',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}

