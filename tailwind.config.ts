import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                oswald: ['var(--font-oswald)'],
                'dm-sans': ['var(--font-dm-sans)'],
                'bebas-neue': ['var(--font-bebas-neue)'],
            },
            colors: {
                primary: '#FFFEF2', // Main background color
                secondary: '#F5F2E5', // Section background color
                accent: '#FEF08A', // Main accent color
                contrast: '#B2D0FF', // Cool contrast color
                tertiary: '#CFF7D1', // Muted green
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                slideDown: {
                    from: { height: '0px' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                slideUp: {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0px' },
                },
            },
            animation: {
                slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
                slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
            },
            container: {
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    md: '3rem',
                    lg: '5rem',
                    xl: '6rem',
                    '2xl': '7rem',
                },
            },
            boxShadow: {
                cartoon: '2px 2px 0px rgba(0,0,0,1)',
            },
        },
    },
    plugins: [],
}
export default config
