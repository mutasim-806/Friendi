import plugin from "tailwindcss/plugin";
import colorsModule from "./src/styles/themes/colors";
import { typography } from "./src/styles/themes/typography";
import borderRadius from "./src/styles/themes/borderRadius";
import spacing from "./src/styles/themes/spacing";

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
      borderRadius,
      spacing,
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens");

      const baseStyles = {};
      const mediaStyles = {};

      for (const [className, breakpoints] of Object.entries(typography)) {
        const baseClass = `.text-${className}`;
        baseStyles[baseClass] = {
          fontSize: breakpoints.base.fontSize,
          lineHeight: breakpoints.base.lineHeight,
          letterSpacing: breakpoints.base.letterSpacing,
        };
        for (const [breakpoint, styles] of Object.entries(breakpoints)) {
          if (breakpoint === "base") continue;

          const media = `@media (min-width: ${screens[breakpoint]})`;

          if (!mediaStyles[media]) {
            mediaStyles[media] = {};
          }

          mediaStyles[media][baseClass] = {
            fontSize: styles.fontSize,
            lineHeight: styles.lineHeight,
            letterSpacing: styles.letterSpacing,
          };
        }
      }

      addComponents(baseStyles);
      Object.entries(mediaStyles).forEach(([media, styles]) => {
        addComponents({ [media]: styles });
      });
    }),
  ],
};
