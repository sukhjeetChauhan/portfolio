/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Poppins: 'Poppins',
      Paprika: 'Paprika',
      Inria: 'Inria Serif',
    },
    container: {
      center: true,
      padding: '4rem',
    },
    extend: {
      colors: {
        dark_primary: '#123c42',
        bg_light_primary: '#9de4ed',
        gray: '#52777c',
      },
      backgroundImage: {
        primaryLinear: 'linear-gradient(180deg, #2fa1af 0.48%, #d8f4f8 100%)',
      },
      dropShadow: {
        primary: '-5px 35px 40px rgba(223, 229, 236, 0.9)',
      },
    },
  },
  plugins: [],
}
