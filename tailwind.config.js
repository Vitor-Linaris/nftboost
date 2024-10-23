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
        "gray-hover-btn-slide": "#07050F",
      },
      maxWidth: {
        grid: "77.5rem",
        "card-nft": "17.4375rem",
        "card-collector": "37rem",
        "logo-size-mb": "10rem",
        "nav-header": "48.3rem",
        "left-cont-footer": "20.25rem",
        "content-desc-hero": "41.1rem",
      },
      width: {
        "area-cards-mobile": "43.75rem",
      },
      height: {
        "area-image-nft": "14.7rem",
        "area-cards-mobile": "15.3rem",
        "area-cards-desk": "26.6rem",
        "area-banner": "29.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    screens: {
      "@tablet": "640px",
      "@laptop": "1024px",
      "@desktop": "1280px",
    },
    backgroundImage: {
      "hero-pattern": 'url("../assets/bg-hero.svg")',
      "banner-hero": 'url("../assets/bg-banner.svg")',
    },
  },
  plugins: [require("tailwindcss-animate")],
};
