import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Intro from './intro'
import PartnersBanner from './partners-banner'
import Stats from './stats/Stats'
import { transform } from '@/utils/transform'
import useSpringScroll from '@/hooks/useSpringScroll'

export const Section2b = () => {
    const ref = useRef<HTMLDivElement>(null)
    const scrollYProgress = useSpringScroll({
        ref: ref,
        offset: ['start end', 'end end'],
    })

    return (
        <motion.section
            ref={ref}
            className=" h-[400vh] md:h-[400vh] w-full relative "

            style={{ background: useTransform(scrollYProgress, [0, 0.3], ["#fff0", "#f5f2e5"]), borderRadius: useTransform(scrollYProgress, [0.1, 0.3], ["999px", "0px"]) }}
        >
            <div className='sticky top-0 left-0 h-screen max-sm:min-h-fit md:max-h-screen flex flex-col justify-center py-16'>

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
