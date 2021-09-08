module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'circuit': "url('./assets/images/banner.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
