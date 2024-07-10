/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*"],
  theme: {
    screens: {
      xs: "480px",
      sm: "557px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1580px",
    },
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        mainColor: "#F44335",
        greenColor: "#00FF84",
        bgDarkColor: "#0C0C0C",
        boldColor: "#2D3142",
        textColor1: "#000000",
        textColor2: "#DDDDDD",
        navTextColor: "#072125",
        footertextColor: "#20484F",
        textWhiteColor: "#FAFAFA",
      },
    },
    container: {
      center: true,
      DEFFOUlT: "10px",
    },
  },
  plugins: [],
};
