import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        goodGreen: "#586E3F",
        textBeige:"#FFFFF0",
      },
      fontFamily:{
        sans: ["Poppins", "sans-serif"], // Override default
        poppins: ["Poppins", "sans-serif"], // Custom class
        serif: ["PT Serif", "serif"],
        ptserif: ["PT Serif", "serif"]
      }
    },
  },
  plugins: [],
} satisfies Config

