/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pixel: ["'Press Start 2P'", "cursive"]
      },
      colors: {
        "sunburst-main": "#a5750c",
        "sunburst-dark": "#644503",
        "sunburst-medium": "#a5750c",
        "sunburst-neon": "#fab113"
      },
    },
  },
  plugins: [],
}
