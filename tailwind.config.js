/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
        container2: "1920px",
      },
      colors: {
        bgColor: "#F3F4F4",
        primary: "#1E2832",
        pink: "#FF6F61",
      },
    },
    fontFamily: {
      robo: ["Roboto", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
