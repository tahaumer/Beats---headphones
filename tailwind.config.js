/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06CAFA",
        secondary: "#111619",
        lightGray: "#D4E0EC",
        purple: "#5444F1",
      },
    },
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
};
