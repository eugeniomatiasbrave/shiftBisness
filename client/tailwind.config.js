/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  plugins: [require('daisyui')],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: { 
          "primary": "#027b5b", // #0a7399   (morado)
          "secondary": "#f6d860",
          "warning": "b3e240", // #b3e240 (verde limon)
          "info": "#027b5b",
          "accent": "#26ffbb",
          "neutral": "#3d4451",
          "base-100": "#ffffff"
        }
      }
    ]
  }
}

