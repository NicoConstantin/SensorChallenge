module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'lightgrey': '#8B8E93',
        'almost-black': '#222222',
        'green-neon': '#00d500',
        'red-neon': '#bb0000',
        'lightblue': '#8bc6f7',
        'darkviolet': '#3A0681',
        'violet': '#7E58BA'
      }),
      backgroundImage: theme => ({
        'circuit': "url('./assets/images/banner.jpg')",
      }),
      placeholderColor: {
        'primary': '#aaaaaa',
      },
      fontFamily: {
        'orbitron': ['Orbitron'],
        'titillium': ['Titillium Web']
      },
      boxShadow: {
        'around': '3px 2px 20px 3px rgba(255, 255, 255, 0.6)',
        'detail-header': '0px -4px 20px 3px rgba(126, 88, 186, 0.7)',
        'neon-green': '0px 0px 3px 1px #0ff',
        'neon-red': '0px 0px 3px 1px #f00'
      },
      height: {
        'cardcontainer': '32rem'
      },
      textColor: {
        'lightblue': '#8bc6f7',
        'darkviolet': '#3A0681',
        'violet': '#7E58BA'
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  }
}
