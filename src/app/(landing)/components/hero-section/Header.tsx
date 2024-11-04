// https://github.com/ixartz/Next-js-Boilerplate/blob/710b466cee3e2f8b2554bed1c205d0e46df9558b/next.config.mjs#L45
import React from 'react'
import Button from '@/components/Button'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'

const navItems = [
    { text: 'About', href: '' },
    { text: 'Roadmap', href: '#roadmap' },
    { text: 'News', href: '#recent-updates' },
    { text: 'Docs', href: '/' },
]

interface NavigationItemProps {
    text: string
    href: string
}

const NavigationItem: React.FC<NavigationItemProps> = ({ text, href }) => {
    return (
        href === '' ? (
            <motion.button className="my-auto gap-2.5 self-stretch whitespace-nowrap bg-white/0 rounded-xl px-4 py-2"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.5)' }}

                onClick={() => {
                    console.log('clicked');
                    const element = document.getElementById('about');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }}
            >
                {text}
            </motion.button>
        )
            : (

                <Link
                    // scroll={false}
                    href={href}
                >
                    <motion.div className="my-auto gap-2.5 self-stretch whitespace-nowrap bg-white/0 rounded-xl px-4 py-2"
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                    >
                        {text}
                    </motion.div>
                </Link>
            )

    )
}

interface HeaderProps {
    logoSrc: string
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = React.useState(false)

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious()
        if (previous && latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    // shadow-[4px_4px_0px_rgba(0,0,0,1)]
    return (
        <motion.header
            className="fixed top-4 left-1/2 translate-x-1/2 z-20 flex items-center justify-between gap-20 border rounded-lg border-black bg-accent px-6 py-1 text-base font-medium w-fit"
            initial={{ y: '-100%', x: '-50%' }}
            variants={{
                visible: { y: 0 },
                hidden: { y: '-150%' },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
            <Link href="/" className="flex justify-start w-36">
                <img
                    loading="lazy"
                    src={logoSrc}
                    alt="Company Logo"
                    className="my-auto aspect-[4.12] w-28 shrink-0 self-stretch object-contain md:w-36"
                />
                {/* <p className='text-xs'>Copyright © 2024 FWEN BOT - All Rights Reserved.</p> */}
                <p className="text-xs">©</p>
            </Link>
            <nav className="my-auto hidden items-center justify-center gap-5 w-fit md:flex">
                {navItems.map((item, index) => (
                    <NavigationItem
                        key={index}
                        text={item.text}
                        href={item.href}
                    />
                ))}
            </nav>
        </motion.header>
    )
}

export default Header
