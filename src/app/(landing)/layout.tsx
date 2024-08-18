import type { Metadata } from 'next'
import { Inter, Oswald, DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

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
            <body className={`${oswald.variable} ${dmSans.variable}`}>
                {children}
            </body>
        </html>
    )
}
