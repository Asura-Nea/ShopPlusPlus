/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shop-blue': '#005C78',
        'shop-black': '#FFFFFF',
        'header-font': '#005C78',
        'bg-card': '#F3F7EC',
        'button-color': '#3DC2EC'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}

