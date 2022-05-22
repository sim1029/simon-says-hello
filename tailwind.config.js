module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#E94560',
        blue: '#3282B8',
      },
      textDecorationThickness: {
        2: '6px',
      },
      typography: {
        sm: {
          css: {
            fontSize: '0.45rem',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
}
