import type { Metadata } from 'next'
import { Inter, Oswald, DM_Sans, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Suspense } from 'react'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })
const bebas = Bebas_Neue({ subsets: ['latin'], variable: '--font-bebas-neue', weight: '400' })

export const metadata: Metadata = {
    title: 'FwenBot',
    description: 'Your friendly trading bot',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            {/* <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js"
                strategy="beforeInteractive"
            /> */}

            <Suspense fallback={null}>
                <body className={`${oswald.variable} ${dmSans.variable} ${bebas.variable}`}>
                    {children}
                </body>
            </Suspense>
        </html>
    )
}
