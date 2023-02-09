/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
