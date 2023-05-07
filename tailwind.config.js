/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",

"./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        popup: {
          '0%': {
            height:'0px'
          },
          '100%': {
            height: '128px'
       },
        }
       
          
        
      },   
      animation:{
        popup:'popup 0.5s ',
        popdown:'popdown 0.5s'
      },
      
    },
  },
  plugins: [],
}
