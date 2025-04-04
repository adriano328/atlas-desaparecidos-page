/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      screens: {
        xs: '576px',
      }
    },
  },
  plugins: [],
  safelist: [
    'col-span-10', 'sm:col-span-10', 'md:col-span-12', 'lg:col-span-10'
  ],
}

