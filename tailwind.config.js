/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "780px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brandred: "#B51530",
        secondary: "#FACB76",
        // light: "#FFEBCC",
        primary: {
          100: "#eccccf",
          200: "#d9999f",
          300: "#c7666e",
          400: "#b4333e",
          500: "#a1000e",
          600: "#81000b",
          700: "#610008",
          800: "#400006",
          900: "#200003",
        },
        brand: {
          100: "#f0d0d6",
          200: "#e1a1ac",
          300: "#d37383",
          400: "#c44459",
          500: "#b51530",
          600: "#911126",
          700: "#6d0d1d",
          800: "#480813",
          900: "#24040a",
        },
        light: {
          100: "#fffbf5",
          200: "#fff7eb",
          300: "#fff3e0",
          400: "#ffefd6",
          500: "#ffebcc",
          600: "#ccbca3",
          700: "#998d7a",
          800: "#665e52",
          900: "#332f29",
        },
      },
      animation: {
        slidedown: "slidedown 0.4s ease-in-out ",
        slideup: "slideup 0.4s ease-in-out",
        slideout: "slideout 0.4s ease-in-out",
      },
      keyframes: {
        slidedown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideup: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideout: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
      zIndex: {
        100: "100",
      },
      fontFamily: {
        primary: ["var(--ThaiSansNeue)"],
        secondary: ["var(--font_Tenor)"],
      },
    },
  },
  plugins: [],
};
