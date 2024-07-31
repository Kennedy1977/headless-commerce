/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      extralight: "200",
      light: "300",
      regualr: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
      extrablack: "1000",
    },
    extend: {
      fontFamily: { sans: ["Mulish", "Helvetica", "Arial", "sans-serif"] },
      colors: {
        "promo-blue": "#0066cc",
        "promo-green": "#009900",
        "promo-red": "#cc0000",
      },

      backgroundImage: {
        "footer-pattern": "url('/background.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
