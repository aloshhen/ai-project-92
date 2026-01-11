export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bar-primary': '#1E1E2C',
        'bar-secondary': '#2D2D3F',
        'bar-accent': '#FF6B6B',
        'bar-text': '#E0E0E0'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}