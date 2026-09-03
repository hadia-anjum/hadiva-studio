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
        blush:      "#FFF0F3",
        "blush-2":  "#FFE4EC",
        "rose-lt":  "#FFD6E0",
        rose:       "#FF8FAB",
        "rose-dk":  "#E05C83",
        "hot-pink": "#FF2D6F",
        cream:      "#FFF8F0",
        charcoal:   "#2D2D2D",
        gray:       "#6B6B6B",
        "gray-lt":  "#A8A8A8",
        lavender:   "#E8DAEF",
        peach:      "#FFDAB9",
        mint:       "#D4F0E7",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins:  ['Poppins', 'sans-serif'],
        dancing:  ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        "pink-gradient":   "linear-gradient(135deg, #FFF0F3, #FFD6E0, #FFF0F3)",
        "pink-radial":     "radial-gradient(ellipse at 50% 0%, rgba(255,143,171,0.15) 0%, transparent 70%)",
        "pink-cta":        "linear-gradient(135deg, #FF8FAB, #FF2D6F)",
        "pink-card":       "linear-gradient(145deg, #FFFFFF, #FFF0F3)",
      },
      animation: {
        float:        "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        shimmer:      "pinkShimmer 4s linear infinite",
        "fade-up":    "fadeUp 0.7s ease-out forwards",
        "spin-slow":  "slowRotate 30s linear infinite",
        blob:         "blob 7s infinite",
        sparkle:      "sparkle 2s ease-in-out infinite",
        "bounce-sm":  "bounceSm 2s infinite",
        heartbeat:    "heartbeat 1.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-14px)" },
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
          "33%":  { transform: "translate(30px, -50px) scale(1.1)" },
          "66%":  { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        sparkle: {
          "0%,100%": { opacity: "0.4", transform: "scale(1)" },
          "50%":     { opacity: "1", transform: "scale(1.2)" },
        },
        bounceSm: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-6px)" },
        },
        heartbeat: {
          "0%":   { transform: "scale(1)" },
          "14%":  { transform: "scale(1.15)" },
          "28%":  { transform: "scale(1)" },
          "42%":  { transform: "scale(1.15)" },
          "70%":  { transform: "scale(1)" },
        },
      },
      boxShadow: {
        "pink-sm":  "0 2px 16px rgba(255,143,171,0.15)",
        "pink-md":  "0 4px 32px rgba(255,143,171,0.20)",
        "pink-lg":  "0 8px 60px rgba(255,143,171,0.25)",
        "soft-sm":  "0 2px 20px rgba(0,0,0,0.04)",
        "soft-md":  "0 6px 40px rgba(0,0,0,0.06)",
        "soft-lg":  "0 12px 60px rgba(0,0,0,0.08)",
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
