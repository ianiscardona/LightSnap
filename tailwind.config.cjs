/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/public/images/home-hero-bg-colored.jpg')",
      },
    },
  },
  plugins: [],
};
