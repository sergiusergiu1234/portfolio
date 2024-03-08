/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'sans': ['Martian Mono', 'sans-serif'],
      'ibm-plex':['IBM Plex'],
      'rubik-mono': ['Rubik Mono One'],
      'rubik_mono_one_two' : ["Secular One", 'sans-serif']
    }
  },
  plugins: [],
}