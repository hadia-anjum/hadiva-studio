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
        blush:      "#FAF4F2",
        "blush-2":  "#F5EBE8",
        "rose-lt":  "#E8C5C8",
        rose:       "#D49B9F",
        "rose-dk":  "#B56B72",
        "hot-pink": "#9C4D54",
        cream:      "#FFFDFB",
        charcoal:   "#231A1C",
        gray:       "#6E5F62",
        "gray-lt":  "#A89A9C",
        lavender:   "#E4D8E2",
        peach:      "#F5DEC9",
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        playfair:  ['"Playfair Display"', 'serif'],
        jost:      ['Jost', 'sans-serif'],
        script:    ['"Pinyon Script"', 'cursive'],
      },
      backgroundImage: {
        "pink-gradient":   "linear-gradient(135deg, #FAF4F2, #E8C5C8, #FAF4F2)",
        "pink-radial":     "radial-gradient(ellipse at 50% 0%, rgba(212,155,159,0.12) 0%, transparent 70%)",
        "pink-cta":        "linear-gradient(135deg, #231A1C, #3A272C)",
        "pink-btn":        "linear-gradient(135deg, #B56B72, #8C3F46)",
        "pink-card":       "linear-gradient(145deg, #FFFDFB, #FAF4F2)",
      },
      animation: {
        float:        "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        shimmer:      "pinkShimmer 4s linear infinite",
        "fade-up":    "fadeUp 0.7s ease-out forwards",
        "spin-slow":  "slowRotate 30s linear infinite",
        blob:         "blob 8s infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        pinkShimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: " 200% center" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowRotate: {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        blob: {
          "0%":   { transform: "translate(0px, 0px) scale(1)" },
          "33%":  { transform: "translate(20px, -30px) scale(1.05)" },
          "66%":  { transform: "translate(-15px, 15px) scale(0.95)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      boxShadow: {
        "pink-sm":  "0 2px 16px rgba(181,107,114,0.10)",
        "pink-md":  "0 6px 30px rgba(181,107,114,0.14)",
        "pink-lg":  "0 12px 50px rgba(181,107,114,0.18)",
        "soft-sm":  "0 2px 20px rgba(35,26,28,0.03)",
        "soft-md":  "0 6px 40px rgba(35,26,28,0.06)",
        "soft-lg":  "0 12px 60px rgba(35,26,28,0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
