module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "btn-bg": "#ABEF5F",
        "bg-body": "#F7F7F7",
        "section-bg": "#F4F4F4",
      },
    },
  },
  plugins: [require("daisyui")],
};
