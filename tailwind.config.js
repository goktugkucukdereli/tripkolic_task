/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "primary-400": "#F2A945",
          "primary-500": "#F78410",
          "primary-600": "#E07516",
        },
      },
    },
    plugins: [],
  };
  