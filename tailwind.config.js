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
      'html' : '#e34c26',
      'css' : '#264de4',
      'js' : '#f0db4f',
      'react': '#61DBFB',
      'next':'#05427c',
      'redux':'#764abc',
      'git' : '#f34f29',
      'node' : '#303030',
      'tailwind' : '#b8c2cc ',
      'firebase': '#FFA611'
     })
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}
