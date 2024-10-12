import { useScroll, motion } from 'framer-motion'
import React, { useRef } from 'react'
import Intro from './intro'
import PartnersBanner from './partners-banner'
import Stats from './stats/Stats'

export const Section2b = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })
    // const backgroundColour = useTransform(
    //     scrollYProgress,
    //     [0, 0.1],
    //     ['#fff0', '#fef08a']
    // )

    return (
        <motion.section
            ref={ref}
            className="h-[160vh] w-screen relative bg-yellow-200"
            // style={{ background: backgroundColour }}
        >
            <div className='sticky top-0 min-h-screen flex flex-col'>

            <PartnersBanner scrollYProgress={scrollYProgress} />
            <Stats />

            </div>
        </motion.section>
    )
}
