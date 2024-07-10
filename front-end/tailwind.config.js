/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shop-blue': '#4B70F5',
        'shop-black': '#151515',
        'button-color': '#3DC2EC'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}

