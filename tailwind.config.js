/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],

  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.ts'],
  },
  theme: {

    extend: {
      colors: {
        primary: '#48b997', // Replace '#4CAF50' with your desired primary color
      },
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1000px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1300px',
      // => @media (min-width: 1536px) { ... }
    },

    container: {
      center: true,
    },

  },
  plugins: [],
}

