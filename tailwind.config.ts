import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        roadRadio: ['RoadRadio', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          DEFAULT: '#898989',
          300: '#6C6C6C',
        },
        black: {
          DEFAULT: '#222529',
        },
        orange: {
          DEFAULT: '#FB7C0E',
          '05': 'rgba(251, 124, 14, 0.05)'
        },
        lightGray: '#E5E5E5',
        iconBackground: '#FFF0E8',
        grayBorder: 'rgba(34, 37, 41, 0.10)',
        storeLogoBg: 'rgba(34, 37, 41, 0.04)',
        sliderBg: 'rgba(60, 60, 67, 0.18)',
        whiteBackground: '#F9FAFB'
      },
      borderRadius: {
        '80': '80px',
      },
    },
  },
  plugins: [],
} satisfies Config;
