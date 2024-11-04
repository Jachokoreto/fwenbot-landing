import React, { useRef } from 'react'
import SitemapLinks from './SitemapLinks'
import UsefulLinks from './UsefulLinks'
import ContactUs from './ContactUs'
import Logo from './Logo'
import { motion, useTransform } from 'framer-motion'
import useSpringScroll from '@/hooks/useSpringScroll'

const Footer: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const scrollYProgress = useSpringScroll(
        {
            ref,
            offset: ['start end', 'end end']
        }
    )

    return (
        <motion.footer ref={ref} className="mt-20 flex w-full flex-col items-center rounded-t-3xl bg-[#FFE769] px-20 pb-5 pt-14 max-md:mt-10 max-md:max-w-full max-md:px-5"
            style={{ y: useTransform(scrollYProgress, [0.1, 0.3], [100, 0]) }}
        >
            <div className="flex container flex-col max-md:max-w-full">
                <div className="flex flex-col md:flex-row items-start md:justify-between gap-10 rounded-3xl ">
                    <SitemapLinks />
                    <UsefulLinks />
                    <ContactUs />
                    <Logo />
                </div>
                <hr className="mt-6 h-px shrink-0 border border-solid border-black max-md:max-w-full" />
                <p className="mt-6 self-center text-center text-base text-black">
                    Copyright © 2024 FWEN BOT - All Rights Reserved.
                </p>
            </div>
        </motion.footer>
    )
}

export default Footer
