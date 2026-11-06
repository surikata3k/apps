// Tailwind config for the apps. Colours, fonts and shapes follow the surikata3k.com home page:
// the "indigo" scale is the home page accent (rust) and "slate" is its warm neutral palette.
module.exports = {
  content: ['../*.html', '../*/*.html'],
  theme: {
    extend: {
      colors: {
        indigo: { 50: '#FBF1EC', 100: '#F6DFD3', 200: '#EDBDA6', 300: '#E09572', 400: '#CF6A3E', 500: '#C0501F', 600: '#B23A0A', 700: '#932F08', 800: '#752607', 900: '#5A1D06', 950: '#3A1203' },
        slate:  { 50: '#FBFBF9', 100: '#F3F2EE', 200: '#E3E2DC', 300: '#D9D8D2', 400: '#9A998F', 500: '#6E6D65', 600: '#555550', 700: '#45453F', 800: '#2A2A26', 900: '#111111', 950: '#0A0A09' },
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      borderRadius: { lg: '6px', xl: '6px', '2xl': '8px', '3xl': '10px' },
      boxShadow: { sm: 'none', DEFAULT: 'none', md: '0 6px 0 -2px rgba(17,17,17,.08)', lg: '0 6px 0 -2px rgba(17,17,17,.08)' },
    },
  },
};
