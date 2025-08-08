import colorsModule from './src/styles/themes/colors';

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      colors: colorsModule.colors,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
