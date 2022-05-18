module.exports = {
  // mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            blue: {
                'primary': '#518FE8',
                'secondary': '#5779EB',
                'light': '#BDCAFC',
            },
            gray: {
                'primary': '#313131',
                'light': '#EEEEEE',
            },
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
