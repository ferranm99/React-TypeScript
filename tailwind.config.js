const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.tsx", "./src/**/*.js"],
  darkMode: 'media',
  theme: {
    colors: {
      // Build your palette here
      black: colors.black,
      transparent: "transparent",
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      white: colors.white,
      violet: colors.violet,
      green: colors.green,
      indigo: colors.indigo,
      fuchsia: colors.fuchsia,
      emerald: colors.emerald
    },
    textColor: {
      gray: colors.trueGray,
      green: colors.green,
      red: colors.red
    },    
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
