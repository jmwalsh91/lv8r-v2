module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#00B2CA",
        
"secondary": "#fda4af",
        
"accent": "#1FB2A6",
        
"neutral": "#f9e7e7",
        
"base-100": "#111118",
        
"info": "#22d3ee",
        
"success": "#36D399",
        
"warning": "#FDF0B0",
        
"error": "#9f1239",

        },
      },
    ],
  }
}
