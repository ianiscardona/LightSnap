/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'smlr': "300px",
      'ip14': "440px",
      'ipse': "380px",
      'meds': "400px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        hero: "url('/public/images/home-hero-bg-colored.jpg')",
      },
    },
  },
  plugins: [],
};
