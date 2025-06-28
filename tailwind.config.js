/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cards-gradient': 'linear-gradient(180deg, rgba(123,123,123,0.05) 0%, rgba(21,21,21,0.00) 100%)',
      },
      // Puedes agregar más extensiones aquí si lo necesitas
    },
  },
  plugins: [],
};
