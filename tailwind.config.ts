import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF9EE",
        sun: {
          50: "#FFF7E0",
          100: "#FFEAB0",
          200: "#FFD970",
          300: "#FFC940",
          400: "#FFB820",
          500: "#F59E0B",
          600: "#D97706",
        },
        blush: {
          100: "#FFE4E6",
          200: "#FFC9CE",
          300: "#FFA0AB",
          400: "#FF6F8A",
          500: "#EF476F",
        },
        sky: {
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
        },
        leaf: {
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
        },
        ink: {
          900: "#1B2A41",
          700: "#3B4A63",
          500: "#5C6B85",
        },
      },
      fontFamily: {
        display: ['Fredoka', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(27,42,65,0.15)',
        pop: '0 16px 40px -8px rgba(239,71,111,0.25)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
