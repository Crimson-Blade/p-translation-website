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
          DEFAULT: 'hsl(207, 73%, 57%)',
          lighter: 'hsl(207, 73%, 52%)',
          darker: 'hsl(207, 73%, 44%)'
        }
      }
    },
  },
  plugins: [],
}

