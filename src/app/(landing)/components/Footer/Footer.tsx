import { motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

import useSpringScroll from '@/hooks/useSpringScroll';

import ContactUs from './ContactUs';
import Logo from './Logo';
import SitemapLinks from './SitemapLinks';
import UsefulLinks from './UsefulLinks';

const Footer: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const scrollYProgress = useSpringScroll(
        {
            ref,
            offset: ['start end', 'end end'],
        },
    );

    return (
        <motion.footer
            ref={ref}
            className="mt-20 flex w-full flex-col items-center rounded-t-3xl bg-[#FFE769] px-20 py-5 max-md:mt-10 max-md:max-w-full max-md:px-5 md:pt-14"
            style={{ y: useTransform(scrollYProgress, [0.1, 0.3], [100, 0]) }}
        >
            <div className="container flex flex-col max-md:max-w-full">
                <div className="flex flex-col items-center gap-5 md:gap-10 rounded-3xl text-center md:flex-row md:items-start md:justify-between md:text-start ">
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
    );
};

export default Footer;
