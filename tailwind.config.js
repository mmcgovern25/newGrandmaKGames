module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "dark": "#333333",
        "secondary": "#00afef"
      },
      screens: {
        md: "860px",
      },
      keyframes: {
        "slide-in-right": {
          "0%": {
            opacity: 0,
            transform: "translate(100%, 0)", // Start off-screen to the right
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)", // End at the original position
          },
        },
      },
      animation: {
        "slide-in-right": "slide-in-right 0.2s ease-out",
      },
    },
  },
  plugins: [
  ],
}
