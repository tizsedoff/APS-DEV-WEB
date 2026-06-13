import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        premium: '0 18px 70px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top right, rgba(255,107,0,0.18), transparent 28%), radial-gradient(circle at bottom left, rgba(255,107,0,0.12), transparent 20%)',
      },
      colors: {
        dark: '#090a0f',
        panel: '#10121a',
        orange: '#ff6b00',
      },
    },
  },
  plugins: [],
};

export default config;
