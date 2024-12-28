/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#243C7E",
        lightBlue: "#D5E1FC",
        exLightBlue: "#d3d8e5",
        orange: "#F47D20",
        dark: "#0e1832",
        text: "#646464",
      },
      textShadow: {
        default: "2px 2px 5px rgba(0, 0, 0, 0.3)",
        custom: "3px 3px 6px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
