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
        notebookBg: '#333333',
        notebookText: '#8F8F90',
        slate: '#272727',
        dark: '#1E1E1E',
        gold: '#E2B764'
      },
      fontSize: {
        'title-sm': [
          '3rem',
          {
            fontWeight: '600'
          }
        ],
        title: [
          '5rem',
          {
            fontWeight: '600'
          }
        ],
        'subtitle-sm': ['1.2rem'],
        subtitle: ['1.35rem']
      }
    }
  },
  plugins: []
}
