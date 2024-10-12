import React, { useRef } from 'react'
import PartnersBanner from './partners-banner'
import Stats from './stats'
import { motion, useScroll, useTransform } from 'framer-motion'
import Intro from './intro'

const Section2 = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end center'],
    })
    // const backgroundColour = useTransform(
    //     scrollYProgress,
    //     [0, 0.1],
    //     ['#fff0', '#fef08a']
    // )

    return (
        <motion.section
            ref={ref}
            className="h-[160vh] w-screen relative"
            // style={{ background: backgroundColour }}
        >
            {/* <PartnersBanner scrollYProgress={scrollYProgress} />
            <Stats /> */}
            <Intro scrollYProgress={scrollYProgress} />
        </motion.section>
    )
}

export default Section2
