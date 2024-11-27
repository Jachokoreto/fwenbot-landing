import { motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

import useSpringScroll from '@/hooks/useSpringScroll'
import { transform } from '@/utils/transform'

import PartnersBanner from './partners-banner'
import Stats from './stats/Stats'

export const Section2b = () => {
    const ref = useRef<HTMLDivElement>(null);
    const scrollYProgress = useSpringScroll({
        ref,
        offset: ['start end', 'end end'],
    });

    return (
        <motion.section
            ref={ref}
            className=" relative h-[400vh] w-full md:h-[400vh] "

            style={{ background: useTransform(scrollYProgress, [0, 0.3], ['#f5f2e520', '#f5f2e5']), borderRadius: useTransform(scrollYProgress, [0.1, 0.3, 0.95, 1], ['999px', '0px', '0px', '999px']) }}
        >
            <div className="container sticky left-0 top-0 flex h-screen flex-col overflow-hidden py-16 max-sm:min-h-fit md:max-h-screen">

                <motion.h1
                    className="container mx-auto mb-10 font-normal"
                    style={{
                        y: transform(scrollYProgress, [0, 0.2], ['100vh', '0vh']),
                    }}
                >
                    Capture the market with Fwenbot.
                </motion.h1>
                <PartnersBanner scrollYProgress={scrollYProgress} />
                <Stats scrollYProgress={scrollYProgress} />

            </div>
        </motion.section>
    );
};
