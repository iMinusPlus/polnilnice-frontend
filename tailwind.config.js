/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(45deg, #06ba39, #0183EEF9)',
      },
      borderImage: {
        'gradient-border': 'linear-gradient(45deg, #06ba39, #0183EEF9) 1',
      },
    },
  },
  daisyui: {
    themes: [
      {
        myDarkTheme: {

          "primary": "#1bba06ff",

          "secondary": "#014feefa",

          "accent": "#EEEEEE",

          "neutral": "#31363F",

          "base-100": "#222831",

          "info": "#2563eb",

          "success": "#65a30d",

          "warning": "#eab308",

          "error": "#dc2626",
        },
      },
        //"light", "dark"
    ],
  },
  plugins: [
    require('daisyui')
  ],
}

