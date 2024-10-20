// https://github.com/ixartz/Next-js-Boilerplate/blob/710b466cee3e2f8b2554bed1c205d0e46df9558b/next.config.mjs#L45
import React from 'react'
import Button from '@/components/Button'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'

const navItems = [
    { text: 'Roadmap', href: '#roadmap' },
    { text: 'About', href: '#about' },
]

interface NavigationItemProps {
    text: string
    href: string
}

const NavigationItem: React.FC<NavigationItemProps> = ({ text, href }) => {
    return (
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
            className="fixed top-0 left-0 z-20 flex w-full flex-wrap items-center justify-between gap-10 overflow-hidden border-b border-black bg-yellow-200 px-6 py-1 text-base font-medium"
            initial={{ y: '-100%' }}
            variants={{
                visible: { y: 0 },
                hidden: { y: '-150%' },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
            <div className="flex justify-start">
                <img
                    loading="lazy"
                    src={logoSrc}
                    alt="Company Logo"
                    className="my-auto aspect-[4.12] w-28 shrink-0 self-stretch object-contain md:w-36"
                />
                {/* <p className='text-xs'>Copyright © 2024 FWEN BOT - All Rights Reserved.</p> */}
                <p className="text-xs">©</p>
            </div>
            <nav className="my-auto hidden min-w-[240px] items-center justify-center gap-5 self-stretch max-md:max-w-full md:flex">
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
