module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk']
    },
    colors: {
      'white': 'white', 
      'red': 'hsl(0, 100%, 66%)',
      'neutral-600': 'hsl(270, 3%, 87%)',
      'neutral-300': 'hsl(279, 6%, 55%)',
      'neutral-50': 'hsl(278, 68%, 11%)',
      'violet-200': 'hsl(249, 99%, 64%)',
      'violet-100': 'hsl(278, 94%, 30%)'
    },
    extend: {
      backgroundImage: {
        'main-mobile': "url('/bg-main-mobile.png')",
        'main-desktop': "url('/bg-main-desktop.png')",
        'card-front': "url('/bg-card-front.png')",
        'card-back': "url('/bg-card-back.png')",
      }
    },
  },
  plugins: [],
}
