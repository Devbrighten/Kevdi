/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray_text: '#374151',
        primaryGreen: '#93C22F',
        seconderyGreen: '#4F8C2B'
      },
      backgroundImage: {
        'gradient': 'radial-gradient(circle, #427921, #3e771d)',
      },
      fontFamily:{
       poppins:'"Poppins", sans-serif',
       
      },
    },
  },
  plugins: [],
}

