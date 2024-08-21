module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "btn-bg": "#ABEF5F",
        "bg-body": "#F7F7F7",
      },
    },
  },
  plugins: [require("daisyui")],
};
