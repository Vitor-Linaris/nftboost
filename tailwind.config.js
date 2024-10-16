/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        "blue-primary": "#1D4FFE",
        "green-primary": "#4BCE97",
        "gray-border-card": "#131317",
        "gray-area-favorite": "#05030A",
      },
      maxWidth: {
        grid: "77.5rem",
        "card-nft": "17.4375rem",
      },
      height: {
        "area-image-nft": "14.7rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
