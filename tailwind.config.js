/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"  // Add this if you have src folder
  ],
  theme: {
    extend: {
      screens: {
        'xl-custom': '1258px', // Custom breakpoint
      },
      keyframes: {
        bounceUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
      animation: {
        'bounce-up': 'bounceUp 2s infinite',
        'bounce-down': 'bounceDown 2s infinite',
      },
    },
  },
  plugins: [],
}