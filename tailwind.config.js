/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'mainColor':'#F4BC16'
      },
      backgroundImage: {
        'serviceDemo1': "url('https://quanticalabs.com/Renovate/Template/images/samples/390x260/image_04.jpg')",
        'serviceDemo2': "url('https://quanticalabs.com/Renovate/Template/images/samples/390x260/image_05.jpg')",
      }
    },
  },
  plugins: [],
}