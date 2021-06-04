// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#7e57c1',
        'secondary': '#653EA7'
      }),

      fontFamily: {
        'heading': 'Odibee Sans, cursive'
      },

      extend: {
        backgroundImage: theme => ({
          'login': "url('https://static.displate.com/857x1200/displate/2019-07-08/258615ec1b02fb8c8a214aa16a830265_425e028110c5390b7164a75d9bf31dfd.jpg')",
        })
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }