import React, { useEffect, useRef } from 'react'
import PartnersBanner from './partners-banner'
import Stats from './stats'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import About from './about'
import useSpringScroll from '@/hooks/useSpringScroll'

const Section2 = () => {
    const ref = useRef<HTMLDivElement>(null)
    // const { scrollYProgress: tempScrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ['start end', 'end center'],
    // })
    // const scrollYProgress = useSpring(tempScrollYProgress, {
    //     stiffness: 400,
    //     damping: 90,
    // });
    const scrollYProgress = useSpringScroll({
        ref: ref,
        offset: ['start end', 'end center'],
    })

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash; // Get the updated hash
            console.log("hash", hash);
            // Perform your logic, e.g., scrolling to an element
        };

        window.addEventListener('popstate', handleHashChange);
        window.addEventListener('hashchange', handleHashChange);

        // Run on initial load
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <motion.section
            ref={ref}
            className="h-[300vh] md:h-[260vh] w-full relative"
        >
            <About scrollYProgress={scrollYProgress} />
        </motion.section>
    )
}

export default Section2
