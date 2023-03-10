/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // "media" or "class"
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#7c3aed",
        },
        green: {
          DEFAULT: "#10b981",
        },
        yellow: {
          DEFAULT: "#fbbf24",
        },
        red: {
          DEFAULT: "#ef4444",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

