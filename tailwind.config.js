const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(autocomplete|button|ripple|spinner|form|input|listbox|divider|popover|scroll-shadow).js"
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      colors: {
        primary: '#4079ff',
        theme: '#111111',
        text_light: '#ccc'
      },
      animation: {
        gradient: 'gradient 8s linear infinite'
      },
    },
  },
  plugins: [heroui()],
}