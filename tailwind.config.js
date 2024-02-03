/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#808080",
        darkGray: "#747474",
        textGray: "#7C7C7C",
        accentGray: "rgba(255, 255, 255, 0.82)",
      },
      fontFamily: {
        manrope: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serfit"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
    },
  },
  plugins: [],
};
