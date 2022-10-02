/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
        "bumblebee",
        "dark",
    ],
},
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ], 
}
