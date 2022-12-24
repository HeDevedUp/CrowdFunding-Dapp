/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
        colors: {
          white: "#fff",
          gray: {
            "100": "#f8f8f8",
            "200": "#f4f5f7",
            "300": "#efefef",
            "400": "#8d8787",
            "500": "#837f7f",
            "600": "#525151",
            "700": "#484747",
            "800": "#3d3d3d",
            "900": "#1e1e1e",
            "1000": "#111",
            "1100": "#09160f",
            "1200": "rgba(255, 255, 255, 0)",
          },
          green: "#04b256",
          black: "#000",
        },

      backgroundImage: {
        astral: "url('/src/assets/background/astral.jpg')",
        saiman: "url('/src/assets/background/saiman.jpg')",
        eoaalien: "url('/src/assets/background/eoaalien.jpg')",
        panight: "url('/src/assets/background/panight.jpg')",
        heroImg: "url('/src/assets/background/hero-img.jpg')",
        landing: "url('/src/assets/background/landing.jpg')",
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
