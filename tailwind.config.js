/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(43, 100%, 96%)',
          lighter: 'hsl(41, 87%, 77%)',
          darker: 'hsl(41, 87%, 77%)'
        }
      },
      animation: {
        'scroll-slow': 'scroll-slow 5s linear infinite',
      },
      keyframes: {
        'scroll-slow': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(calc(-50%))' },
        },
      }
    },
  },
  plugins: [],
}

