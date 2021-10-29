const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: 'class', // for toggling dark mode manually  or 'media' for toggling that relies on the operating system preference  or 'false'
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      serif: ['Yeseva One', ...defaultTheme.fontFamily.serif],
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
      md: '875px',
    },
    extend: {
      colors: {
        burgundy: '#8D3636',
        gold: '#EFDBB5',
        // gold: '#C0A062',
        black: '#212121',
        'black-transparent': 'rgba(33,33,33,0.90)',
        'white-transparent': 'rgba(255,255,255,0.96)',
        gray: '#615D55',
        'light-gray': '#F2F2F2',
        'dark-gray': '#2E2C28',
      },
      zIndex: {
        '-1': '-1',
      },
      saturate: {
        75: '.75',
      },
    },
  },
  variants: {
    extend: {
      inset: ['hover'],
    },
  },
  plugins: [],
}
