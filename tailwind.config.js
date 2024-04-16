const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#aa8e5c",
      black: "#000000",
      weakText: "#544f4f",
      beige: "#f8f7f5",
      lightGrey: "#f9f9f9",
      white: "#ffffff",
      carrot: "#ea5a43",
      red: "#ab0000",
      pink: "#F8C8DC",
      blue: "#A7C7E7",
      "border-grey": "#b8b8b8",
      transparent: "transparent",
    },
    screens: {
      mobile: "380px",
    },
    extend: {
      fontFamily: {
        gowun: ["var(--font-gowunKR)", ...fontFamily.sans],
      },
      dropShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "wedding-bg": "url('/public/assets/photos/00-1.jpg')",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        fadeOut: "fadeOut 1s ease-in-out forwards",
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      aspectRatio: {
        246120: "246/120",
      },
    },
  },
  plugins: [
    require("./tailwind-plugins/padded-horizontal"),
    require("./tailwind-plugins/scrollbar-hide"),
  ],
};
