/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        caramel: '#C58C4F',
        bronze: '#C58C49',
        cadetGray: '#9DA5B1'
      },
      keyframes: {
        press: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        },
      },
      animation: {
        press: 'press 0.2s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      transform: ['active'],
      scale: ['active'],
    },
  },
  plugins: [],
}
