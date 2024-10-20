import React, { useRef } from 'react'
import PartnersBanner from './partners-banner'
import Stats from './stats'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Intro from './intro'
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

    return (
        <motion.section
            ref={ref}
            className="h-[300vh] md:h-[260vh] w-full relative"
        >
            <Intro scrollYProgress={scrollYProgress} />
        </motion.section>
    )
}

export default Section2
