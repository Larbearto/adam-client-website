/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-20': '#ffffd6',
        'gray-50': '#ffffd6',
        'gray-100': '#062730',
        'gray-500': '#5E0000',
        'primary-100': '#53a4db',
        'primary-300': '#062730',
        'primary-500': '#062730',
        'secondary-400': '#FFCD5B',
        'secondary-500': '#FFC132'
      },
      backgroundImage: (theme) => ({
        'gradient-yellowred': 'linear-gradient(90deg, #abd6f3 0%, #FFC837 100%)',
        'mobile-home': "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      content: {
        evolvetext: "url('/public/assets/EvolveText.png)",
        abstractwaves: "url('/public/assets/AbstractWaves.png')",
        sparkles: "url('/public/assets/Sparkles.png')",
        circles: "url('/public/assets/Circles.png')"
      }
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px'
    }
  },
  plugins: []
}
