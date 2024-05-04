/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkprimary: '#00347E',
        primary: '#044DB5',
        lightprimary: '#126CD8',
        skyprimary: '#15C8FF',
      },
    },
  },
  plugins: [],
}