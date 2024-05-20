/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      abc:["Red Hat Mono"],
      sans_serif:["Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"] 
    },
      colors: {
       grey:"#0B2B3C",
       pink:'#FF6666',
       card:'#F26C4F',
      black:'#000000',
       white:'#f8fafc',
       white3:'#EBECF1',
       white2:'#CCCCCC',
      yellow:'#FEF9C3',
      grey2:'#0B2B3C',
      orange:'#f97316',
      green:'#3E57D0',
     },
     backgroundImage: {
      'hero-pattern': "url('./src/assets/bg.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [],
}