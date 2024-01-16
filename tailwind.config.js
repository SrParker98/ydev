/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./public/**/*.html",
    "./public/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "fondo-personalizado": "url('/assets/img1.png')",
      },
      fontFamily: {
        "font-exo": ["Exo 2", "sans-serif"],
      },
      opacity: {
        64: ".64",
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
      fontSize: {
        h2: "40px",
        h3: "20px",
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
        "border-color": "#DFDDDA",
        "price-span": "#A1A1A1",
        "span-4": "#F94711",
        "span-3b": "#2582CA",
        "span-3y": "#EBF227",
        "bg-opacity": "rgb(0 0 0 50%)",
      },
    },
  },
  plugins: [],
};
