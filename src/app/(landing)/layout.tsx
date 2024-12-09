import './globals.css';

import type { Metadata } from 'next';
import { Bebas_Neue, DM_Sans, Oswald } from 'next/font/google';
import { Suspense } from 'react';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const bebas = Bebas_Neue({ subsets: ['latin'], variable: '--font-bebas-neue', weight: '400' });

export const metadata: Metadata = {
    title: 'FwenBot: Your Ultimate Discord Crypto Trading Companion',
    description: 'Experience seamless cryptocurrency trading within your Discord server with FwenBot. Execute buy and sell orders effortlessly, share profitable projects, and earn rewards. Join over 1,200 users and trade with confidence using FwenBot\'s intuitive interface.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
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
    );
}
