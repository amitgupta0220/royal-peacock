/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        stone: "#F6F3EE",
        cloud: "#FBFAF8",
        gold: {
          50: "#FBF7EE",
          100: "#F6EAD2",
          200: "#EAD3A2",
          300: "#DCB96C",
          400: "#C9A86A",
          500: "#B8954E",
          600: "#9C7C3F",
          700: "#7C6332",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.10)",
        lift: "0 16px 40px rgba(15, 23, 42, 0.14)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      fontFamily: {
        serif: ['ui-serif','Georgia','Cambria','"Times New Roman"','Times','serif'],
        sans: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Arial','sans-serif'],
      },
    },
  },
  plugins: [],
};
