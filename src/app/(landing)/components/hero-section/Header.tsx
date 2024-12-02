import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const navItems = [
    { text: 'About', href: '' },
    { text: 'Roadmap', href: '#roadmap' },
    { text: 'News', href: '#recent-updates' },
    { text: 'Docs', href: '/' },
];

type NavigationItemProps = {
    text: string;
    href: string;
};

const NavigationItem: React.FC<NavigationItemProps> = ({ text, href }) => {
    return (
        href === ''
            ? (
                <motion.button
                    className="my-auto gap-2.5 self-stretch whitespace-nowrap rounded-xl bg-white/0 px-4 py-2 text-end"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.5)' }}

                    onClick={() => {
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

                <motion.div
                    className="my-auto gap-2.5 self-stretch whitespace-nowrap rounded-xl bg-white/0 px-4 py-2 text-end"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                >
                    <Link
                        // scroll={false}
                        href={href}
                    >
                        {text}
                    </Link>
                </motion.div>
            )

    );
};

type HeaderProps = {
    logoSrc: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious();
        if (previous && latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.header
            className={`fixed left-1/2 top-2 z-20 flex flex-col w-[90%] translate-x-1/2 items-center rounded-lg border border-black bg-accent px-6 py-1 text-base font-medium h-fit`}
            initial={{ y: '-100%', x: '-50%' }}
            variants={{
                visible: { y: 0 },
                hidden: { y: '-150%' },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
            <div className='w-full flex justify-between'>

                <Link href="/" className="flex w-36 justify-start">
                    <img
                        loading="lazy"
                        src={logoSrc}
                        alt="Company Logo"
                        className="my-auto aspect-[4.12] w-28 shrink-0 self-stretch object-contain md:w-36"
                    />
                    <p className="text-xs">©</p>
                </Link>
                <nav className="my-auto hidden w-fit items-center justify-center gap-5 md:flex">
                    {navItems.map((item, index) => (
                        <NavigationItem
                            key={index}
                            text={item.text}
                            href={item.href}
                        />
                    ))}
                </nav>

                <button
                    className="flex items-center md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="size-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        >
                        </path>
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <div className=" w-full  h-fit flex flex-col items-start my-4 md:hidden">
                    {/* <button
                        className="self-end mb-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button> */}
                    {navItems.map((item, index) => (
                        <NavigationItem
                            key={index}
                            text={item.text}
                            href={item.href}
                        />
                    ))}
                </div>
            )}

        </motion.header>
    );
};

export default Header;
