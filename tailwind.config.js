import daisyui from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F52FF",
        secondary: "#1A0F91",
        "primary-2": "#A4C4FF",
        "secondary-2": "#373C64",
      },
    },
  },
  plugins: [daisyui],
};
