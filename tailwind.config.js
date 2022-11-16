/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'mainColor':'#F4BC16'
      },
      backgroundImage: {
        'serviceDemo1': "url('https://quanticalabs.com/Renovate/Template/images/samples/390x260/image_04.jpg')",
        'serviceDemo2': "url('https://quanticalabs.com/Renovate/Template/images/samples/390x260/image_05.jpg')",
      },
      keyframes: {
        fIL: {
            '0%': {
               opacity:   '0',
               transform: 'translateX(-20px)'
            },
            '100%': {
               opacity: '1',
               transform: 'translateX(0)'
            }
        },
        fIR: {
          '0%': {
             opacity:   '0',
             transform: 'translateX(20px)'
          },
          '100%': {
             opacity: '1',
             transform: 'translateX(0)'
          }
      }
      },
      animation: {
        'fadeInLeft': 'fIL 0.8s ease-out',
        'fadeInRight': 'fIR 0.8s ease-out',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}