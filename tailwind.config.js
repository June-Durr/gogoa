/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EBF5FF",
          100: "#E1EFFE",
          600: "#3182CE",
          700: "#2B6CB0",
          800: "#2C5282",
          900: "#1A365D",
        },
        yellow: {
          300: "#FBD38D",
          400: "#F6AD55",
          500: "#ED8936",
          600: "#DD6B20",
        },
        // Brand specific colors
        science: {
          light: "#E3F8FF",
          DEFAULT: "#5BBDFF",
          dark: "#0078C2",
        },
        nature: {
          light: "#E7FFE3",
          DEFAULT: "#7ED957",
          dark: "#2D8700",
        },
        story: {
          light: "#FFF3E3",
          DEFAULT: "#FFB84D",
          dark: "#CC7A00",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
  },
  plugins: [],
};
