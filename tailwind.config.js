/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    fontFamily: {
      title: ['Fira Sans', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        slate: '#272727',
        gold: '#E2B764'
      },
      fontSize: {
        title: [
          '5rem',
          {
            fontWeight: '600'
          }
        ],
        subtitle: ['1.35rem']
      }
    }
  },
  plugins: []
}
