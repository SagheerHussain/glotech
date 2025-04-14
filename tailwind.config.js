/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" }, 
          /* moves content left by 50% + 0.5rem to account for any gap */
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      colors: {
        primary: '#8c6238',
        secondary: '#c9a66f',
        theme: '#111111',
        text_dark: "#222222",
        text_light: '#ccc'
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
        scroll: "scroll 60s linear infinite", 
      },
    },
  },
  plugins: [],
}