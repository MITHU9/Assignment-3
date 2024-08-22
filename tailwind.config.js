module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans - serif"],
      },
      colors: {
        "btn-bg": "#ABEF5F",
        "bg-body": "#FEFEFE",
        "section-bg": "#F4F4F4",
      },
    },
  },
  plugins: [require("daisyui")],
};
