/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'bp600':'600px',
        sm: '640px',  // Small devices
        md: '768px',  // Medium devices
        'bp840':'840px',
        lg: '1024px', // Large devices
        'bp1200':'1200px',
        xl: '1280px', // Extra large devices
        'bp1380':'1380px',
        '2xl': '1536px', // Extra extra large devices
      },
    },
  },
  plugins: [],
}

