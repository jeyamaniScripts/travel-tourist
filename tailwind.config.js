/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        darkBackgorund:'#0C111F',
        brightColor:'#F9EC70',
        //sectionBackground:'#2d2d2d',
        roseWhite:'#EBE0E4',
        textColor:'#000000',
        primaryColor:'#0287a8',
        secondaryColor:'#00c3c7',
      },
      container:{
        padding:{
          DEFAULT:'1rem',
          sm:'2rem',
          lg:'4rem',
          xl:'5rem',
          "2xl":'6rem',
        }
      },
      
    },
  },
  plugins: [
    function ({addUtilities})
    {
      const newUtilities ={
        '.gradient-button':{
          background:'linear-gradient(to right, #0287a8,#00c3c7)',
        }
      }
      addUtilities(newUtilities,['responsive','hover'])
    }
  ],
}

