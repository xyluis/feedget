module.exports = {
  mode: 'jit',
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257E5'
        }
      }
    },
    screens: {
      'md': {
        max: '768px'
      },
      'sm': {
        max: '640px'
      }
    }
  },
  plugins: [],
}
