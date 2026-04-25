export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#000000',
          fg: '#e8ffe8',
          muted: 'rgba(232, 255, 232, 0.45)',
          accent: '#00ff88',
          'accent-dim': 'rgba(0, 255, 136, 0.08)',
          border: 'rgba(0, 255, 136, 0.12)',
        },
      },
      fontFamily: {
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
}
