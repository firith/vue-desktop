const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        tree: 'url("~@/assets/images/background-tree.png")',
      },
      colors: {
        'intren-primary': {
          light: '#73c2fb',
          dark: '#0080fe',
        },
      },
      fontFamily: {
        sans: ['"Roboto Flex"', ...defaultTheme.fontFamily.sans],
        mono: ['"Roboto Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
