module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'circuit': "url('./assets/images/banner.jpg')",
       }),
      fontFamily: {
        'orbitron': ['Orbitron'],
      },
      boxShadow: {
        'around': '3px 2px 20px 3px rgba(255, 255, 255, 0.3)',
      },
      height: {
        'cardcontainer': '32rem'
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  }
}
