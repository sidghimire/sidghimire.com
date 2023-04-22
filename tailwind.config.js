/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#1a1a1a",
          secondary: "#2d2d2d",
          accent: "#FFC107",
        },
        light: {
          primary: "#f7fafc",
          secondary: "#edf2f7",
          accent: "#FFA500",
        },
      },
    },
  },
  plugins: [],
};
