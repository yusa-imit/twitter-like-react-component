module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/*"],
  content: [],
  theme: {
    screens: {
        "sm": "500px",
        "md": "1005px",
        "lg": "1095px",
        "xl": "1280px"
    },
    extend: {},
  },
  plugins: [],
}
