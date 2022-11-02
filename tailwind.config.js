/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: '1px'
      },
      fontFamily: {
        body: ['Signika Negative', 'sans-serif'],
        design: ['MuseoModerno', 'cursive']
      },
      colors: {
        accent: {
          100: '#dcd2f9',
          200: '#b9a6f2',
          300: '#9679ec',
          400: '#734de5',
          500: '#5020df',
          600: '#401ab2',
          700: '#301386',
          800: '#200d59',
          900: '#10062d'
        },
      },
    },
  },
  plugins: [],
}