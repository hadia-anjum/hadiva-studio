import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory:    "#F8F4EE",
        "ivory-2":"#EFE9DF",
        "ivory-3":"#E6DDD0",
        cream:    "#FDFAF6",
        mocha:    "#3D2B1F",
        "mocha-2":"#5C3D2E",
        taupe:    "#7A6552",
        "taupe-lt":"#A89078",
        gold:     "#C9A96E",
        "gold-dk":"#A07840",
        "gold-lt":"#DFC08A",
        champagne:"#E7D3B0",
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        playfair:  ['"Playfair Display"', 'serif'],
        jost:      ['Jost', 'sans-serif'],
        cursive:   ['"Alex Brush"', 'cursive'],
        pinyon:    ['"Pinyon Script"', 'cursive'],
        monsieur:  ['"Monsieur La Doulaise"', 'cursive'],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg,#A07840,#DFC08A,#A07840)",
        "mocha-gradient":"linear-gradient(135deg,#3D2B1F,#5C3D2E)",
        "ivory-gradient":"linear-gradient(135deg,#F8F4EE,#EFE9DF)",
      },
      animation: {
        float:      "float 5s ease-in-out infinite",
        shimmer:    "goldShimmer 4s linear infinite",
        "fade-up":  "fadeUp 0.7s ease-out forwards",
        "spin-slow":"slowRotate 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform:"translateY(0)" },
          "50%":     { transform:"translateY(-14px)" },
        },
        goldShimmer: {
          "0%":   { backgroundPosition:"-200% center" },
          "100%": { backgroundPosition:" 200% center" },
        },
        fadeUp: {
          "0%":   { opacity:"0", transform:"translateY(24px)" },
          "100%": { opacity:"1", transform:"translateY(0)" },
        },
        slowRotate: {
          from: { transform:"rotate(0deg)" },
          to:   { transform:"rotate(360deg)" },
        },
      },
      boxShadow: {
        "gold-sm":  "0 2px 16px rgba(201,169,110,0.20)",
        "gold-md":  "0 4px 32px rgba(201,169,110,0.25)",
        "gold-lg":  "0 8px 60px rgba(201,169,110,0.30)",
        "warm-sm":  "0 2px 20px rgba(61,43,31,0.08)",
        "warm-md":  "0 6px 40px rgba(61,43,31,0.12)",
        "warm-lg":  "0 12px 60px rgba(61,43,31,0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
