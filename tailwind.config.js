/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*{html,js}',
    '.public/index.html'
  ],
  theme: {
    extend: {
      fontSize: {
        logo: `23px`,
        basic: `16px`,
      },
      fontFamily: {
        basic: 'Roboto Flex',
        basiccondensed: `Roboto Condensed`,
        header: `Bebas Neue`,
      },
      colors: {
        blue: '#0147FF',
        gray_dot: '#EDEDED',
      },
      letterSpacing: {
        tightest: `4`,
      },
      
    },
    
  },
  plugins: [],
}
