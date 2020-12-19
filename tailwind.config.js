const colors = require("tailwindcss/colors")
const config = require("./src/config/siteConfig")

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
        primary: config.primaryColor,
        secondary: "#EDF0FA",
        "light-blue": colors.lightBlue,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        teal: colors.teal,
        "blue-gray": colors.blueGray,
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
