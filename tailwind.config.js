export default {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#093C63",         // Azul marino profundo
        blue: "#0E4770",         // Azul medio
        blueAccent: "#155079",   // Azul acento
        orange: "#E8782F",       // Naranja principal
        orangeLight: "#ED823A",  // Naranja claro
        white: "#FFFFFF",        // Blanco
        blueLight: "#E7EDF1",    // Azul muy claro
        blueGray: "#CFDAE2",     // Azul grisáceo claro
      },
    },
  },
  plugins: [],
};