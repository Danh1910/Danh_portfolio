/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan tất cả file React
  ],
  theme: {
    extend: {
      colors: {
        cyanLight: '#00ffff', // nếu muốn custom màu cyan
        darkbg: '#121212',
      },
    },
  },
  plugins: [],
}
