const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: 'class', // for toggling dark mode manually  or 'media' for toggling that relies on the operating system preference  or 'false'
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      serif: ['Yeseva One', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        burgundy: '#8D3636',
        gold: '#EFDBB5',
        black: '#212121',
        gray: '#615D55',
        'light-gray': '#F2F2F2',
        'dark-gray': '#2E2C28',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
