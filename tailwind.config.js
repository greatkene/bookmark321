module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayBlue: 'hsl(229, 8%, 60%)',
        darkBlue: 'hsl(229, 31%, 21%)'
      },
    
    },

    fontFamily : {
      Rubik : ['Rubik, sans-serif']
    },

    container : {
      center: true,
      padding: '1rem',
      screens : {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  plugins: [],
}