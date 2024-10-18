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
        "card-collector": "37rem",
        "logo-size-mb": "10rem",
        "nav-header": "48.3rem",
      },
      height: {
        "area-image-nft": "14.7rem",
      },
    },
    screens: {
      "@tablet": "640px",
      // => @media (min-width: 640px) { ... }

      "@laptop": "1024px",
      // => @media (min-width: 1024px) { ... }

      "@desktop": "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
