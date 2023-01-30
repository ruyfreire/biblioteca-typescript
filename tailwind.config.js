const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        'h-calc': (value) => ({
          height: `calc(100vh - ${value})`
        })
      })
    })
  ]
}
