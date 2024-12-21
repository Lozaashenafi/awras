/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#243C7E",
        lightBlue: "#D5E1FC",
        orange: "#F47D20",
        dark: "#101828",
        text: "#646464",
      },
    },
  },
  plugins: [],
};
