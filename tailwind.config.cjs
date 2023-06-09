/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sana: 'Roboto, sans-serif'
      },
      colors: {
        smoky: {
          100: '#0F090C'
        }
      }
    },
  },
  plugins: [],
}
