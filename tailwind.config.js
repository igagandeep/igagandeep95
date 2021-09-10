module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex:{
      '999' : 9999,
    },
    extend: {
      backgroundImage:theme => ({
        'hero-pattern' : "url('/heroImage.jpg')",
      }),

      colors: {
        secondary: "#e54b4b"        
      },

    
    },
    
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#161c2d',
      'secondary': '#e54b4b',
      'danger': '#e3342f',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
