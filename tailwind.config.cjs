/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        // pattern: "url('/public/Assets/bg_pattern.png')",
      },
      colors: {
        main_primary: "#FC604D",
        base_dark: "#EBEFF3",
        base_light: "#FAFAFA",
        white: "#FFFFFF",
        grey: "#98AAB9",
        black2: "#313539",
        black3: "#333",
        black: "#000",
      },
    },

    maxWidth: {
      container: "1600px",
    },
    screens: {
      sm: {
        max: "768px"
      },
      md: {
        max: "1024px"
      },
      lg: {
        max: "1200px"
      },
      xl: {
        max: "1500px"
      },
    },

    fontFamily: {
      main: '"Raleway", sans-serif',
    },

    fontSize: {
      h1: ["80px", "90px"],
      h2: ["60px", "80px"],
      h3: ["50px", "70px"],
      h4: ["35px", "50px"],
      h5: ["20px", "30px"],
      h6: ["18px", "25px"],
    },
    fontWeight: {
      w9: 900,
      w8: 800,
      w7: 700,
      w6: 600,
      w5: 500,
      w4: 400,
      w3: 300,
    },
  },
  plugins: [],
};