/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],

  theme: {
    extend: {
      colors: {
        obsidian:    '#0a0a0a',
        charcoal:    '#141414',
        smoke:       '#1e1e1e',
        ivory:       '#f0e6d3',
        'ivory-dim': '#a89e8c',
        gold:        '#c8a24d',
      },

      fontFamily: {
        headline: ["'Cinzel', serif"],
        body:     ["'Montserrat', sans-serif"],
      },

      boxShadow: {
        gold:      '0 0 24px rgba(200, 162, 77, 0.35)',
        'gold-lg': '0 0 40px rgba(200, 162, 77, 0.4)',
      },
    },
  },

  plugins: [],
};