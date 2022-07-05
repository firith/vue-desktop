/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        tree: 'url("~@/assets/images/background-tree.png")',
      },
    },
  },
  plugins: [],
};
