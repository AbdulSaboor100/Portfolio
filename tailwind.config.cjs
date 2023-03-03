/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        // pattern: "url('/public/Assets/bg_pattern.png')",
        portfolio_1:"url('/public/Assets/1.jpg')",
        portfolio_2:"url('/public/Assets/2.jpg')",
        portfolio_3:"url('/public/Assets/3.jpg')",
        portfolio_4:"url('/public/Assets/4.jpg')",
      },
      colors: {
        border_grey : "#ccc" , 
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
      m1170: "1170px",
      m420: "420px",
    },
    screens: {
      xs: {
        max: "500px"
      },
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
      text140: ["8.75rem", "90px"],
      h1: ["5rem", "90px"],
      h2: ["3.75rem", "80px"],
      h3: ["3.125rem", "70px"],
      h4: ["2.188rem", "50px"],
      h5: ["1.25rem", "30px"],
      h6: ["1.125rem", "25px"],
      p: ["1rem", "32px"],
      small: ["14px", "20px"],
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