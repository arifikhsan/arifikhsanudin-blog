const colors = require("tailwindcss/colors")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      display: "Metropolis",
      body: "Inter",
    },
    extend: {
      colors: {
        primary: "4361EE",
        secondary: "EDF0FA",
        "light-blue": colors.lightBlue,
        fuchsia: colors.fuchsia,
        "blue-gray": colors.blueGray,
      },
    },
  },
  variants: {},
  plugins: [],
}
