/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          maindark: "#18181b",
          primary: "#10b981",
          white: '#FFF',
          danger: 'rgb(239 68 68)',
        },
        text: {
          backColor: 'rgb(156 163 175)',
        }
      },
    },
  },
};
