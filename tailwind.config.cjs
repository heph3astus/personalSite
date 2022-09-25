/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      "bumblebee",
      {
        siteTheme: {
        
        "primary": "#189090",
                
        "secondary": "#006060",
                
        "accent": "#f09048",
                
        "neutral": "#189090",
                
        "base-100": "#ffffff",
                
        "info": "#dcfce7",
                
        "success": "#0e7490",
                
        "warning": "#D86000",
                
        "error": "#EF1A2C",
        },
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
