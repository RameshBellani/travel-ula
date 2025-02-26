import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'safari-tan': '#F4EBD0',
        'safari-brown': '#483D3F',
        'safari-green': '#1C5253',
        'safari-gold': '#D4AF37',
        'safari-cream': '#F8F4E3'
      }
    },
    animation: {
      'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    }
  },
  plugins: [],
} satisfies Config;
