import colors from '@material-tailwind/html/theme/base/colors';

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
      },
    },
    extend: {
      
    },
  },
  plugins: [],
});

