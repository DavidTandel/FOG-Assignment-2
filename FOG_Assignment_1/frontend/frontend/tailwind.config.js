module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    ],
    darkMode: "class",
    theme: {
      screens: {
        lg: { max: "1440px" },
        md: { max: "1050px" },
        sm: { max: "550px" },
      },
      extend: {
        colors: {
          amber: { 500: "var(--amber_500)" },
          black: "var(--black)",
          color_black: {
            900: "var(--color_black_900)",
            "900_01": "var(--color_black_900_01)",
          },
          green: { a700: "var(--green_a700)" },
          red: { a700: "var(--red_a700)" },
          white: {
            0: "var(--white_0)",
            1: "var(--white_1)",
            a700_19: "var(--white_a700_19)",
            a700_33: "var(--white_a700_33)",
          },
          yellow: { a400: "var(--yellow_a400)" },
        },
        boxShadow: {},
        fontFamily: { rajdhani: "Rajdhani" },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };