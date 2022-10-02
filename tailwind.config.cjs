/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      "bumblebee",
      {
        siteTheme: {
        
       primary: "#BF8C1C",
    "primary-content": "#ffffff",
    secondary: "#181830",
    "secondary-content": "#ffffff",
    accent: "#ffffff",
    "accent-content": "#ffffff",
    neutral: "#191D24",
    "neutral-focus": "#111318",
    "neutral-content": "#A6ADBB",
    "base-100": "#2A303C",
    "base-200": "#242933",
    "base-300": "#20252E",
    "base-content": "#A6ADBB",        },
      },
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
