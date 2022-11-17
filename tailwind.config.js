module.exports = {
  content: ["./public/js/cljs-runtime/**/*.js"],
  plugins: [require("@tailwindcss/line-clamp")],
  future: { removeDeprecatedGapUtilities: true },
  darkMode: "class",
  theme: {
    extend: {},
  },
};
