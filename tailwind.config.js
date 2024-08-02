/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightBlue': '#D4E9FF',
        'Blue': '#4285F3',
        'deepBlue': '#156BCA',
        'navyBlue': '#102C4A',
        'blueBlack': '#1A2531',
        'realBlack': '#152A16',
        'Black1': '#2E3439',
        'Black2': '#232F3C',
        'darkAsh': '#5C635A',
        'lightAsh': '#D1D1D1',
      },
      fontFamily: {
        'Poppins': "'Poppins', sans-serif",
        'Lexend': "'Lexend', sans-serif",
      }
    },
  },
  plugins: [],
}