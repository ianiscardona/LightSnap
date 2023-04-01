/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      smlr: "300px",
      ip14: "440px",
      ipse: "380px",
      meds: "640px",
    },
    extend: {
      backgroundImage: {
        hero: "url('/public/images/home-hero-bg-colored.jpg')",
      },
    },
  },
  plugins: [],
};
