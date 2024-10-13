import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Intro from './intro'
import PartnersBanner from './partners-banner'
import Stats from './stats/Stats'
import { transform } from '@/utils/transform'

export const Section2b = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end'],
    })

    return (
        <motion.section
            ref={ref}
            className="h-[300vh] w-screen relative bg-yellow-200"

            style={{ background: useTransform(scrollYProgress, [0, 0.3], ["#fff0", "#fef08a"]), borderRadius: useTransform(scrollYProgress, [0.1, 0.3], ["999px", "0px"]) }}
        >
            <div className='sticky top-0 h-screen flex flex-col justify-center py-12'>

                <motion.h1
                    className="font-normal container mx-auto mb-10"
                    style={{
                        y: transform(scrollYProgress, [0, 0.4], ["100vh", "0vh"]),
                    }}
                >
                    Capture the market with Fwenbot.
                </motion.h1>
                <PartnersBanner scrollYProgress={scrollYProgress} />
                <Stats scrollYProgress={scrollYProgress} />

            </div>
        </motion.section>
    )
}
