/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan tất cả file React
  ],
  theme: {
    extend: {
      colors: {
        // Màu nhấn của cả trang. Muốn quay lại màu cũ: đổi thành colors.cyan
        // (và sửa --accent-rgb trong src/index.css cho khớp).
        accent: colors.purple,
        darkbg: "#0a0a0f",
        surface: "#14141c",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
