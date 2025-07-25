/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FBBB00',
      },
      dropShadow: {
        yellow: '-12px 12px 0 #FBBB00',
        yellowHover: '-8px 8px 0 #FBBB00', // Reduced shadow for hover
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
          josefin: ['"Josefin Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
