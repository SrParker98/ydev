/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "fondo-personalizado": "url('/assets/img1.png')",
      },
      fontFamily: {
        "font-exo": ["Exo 2", "sans-serif"],
      },
      opacity: {
        64: "64",
      },
      backgroundOpacity: {
        64: "64",
      },
      padding: {
        "79px": "79px",
        75: "75px",
      },
      width: {
        400: "400px",
        130: "130px",
      },
      height: {
        35: "35px",
      },
      spacing: {
        landing: "590px",
        landingW: "1280px",
        75: "75px",
        177: "177px",
        153: "153px",
        45: "45px",
        53: "53px",
        60: "60px",
        141: "142px",
        bar: "8px",
      },
      colors: {
        "btn-background": "#E2E200",
        "charging-bar": " #E2E2E2 ",
      },
    },
  },
  plugins: [],
};
