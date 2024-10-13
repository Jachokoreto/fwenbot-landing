import {
    motion,
    motionValue,
    MotionValue,
    useScroll,
    useTransform,
} from 'framer-motion'
import { init } from 'next/dist/compiled/webpack/webpack'
import React, { use, useRef } from 'react'

const StatItem = ({
    title,
    value,
    scrollYProgress,
    index,
}: {
    title: string
    value: string
    scrollYProgress: MotionValue<number>
    index: number
}) => {
    const y = useTransform(
        scrollYProgress,
        [index / 10 + 0.3, Math.min((index) / 10 + 0.4 + 0.3, 1)],
        ["100vh", "0vh"]
    )
    // const opacity

    return (
        <motion.div
            className="flex h-full flex-col justify-between rounded-[24px] bg-[#fef3a1] p-6"
            style={{ y }}
            // initial={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
        >
            <p className="w-full text-2xl md:text-4xl">{title}</p>
            <h3 className="ml-auto text-[4rem] font-normal md:text-[6rem]">
                {value}
                <span className="opacity-50">+</span>
            </h3>
        </motion.div>
    )
}

const statVals = [
    { title: 'Total Trade Volume', value: '100' },
    { title: 'Total Users', value: '1.2K' },
    { title: 'Lifetime Volume', value: '$88B' },
    { title: 'Total Trade', value: '100' },
]

const Stats = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const ref = useRef(null)
    const transform = (
        mationValue: MotionValue<number>,
        val1: any[],
        val2: any[]
    ) => {
        return useTransform(mationValue, val1, val2)
    }

    return (
        <motion.div
            ref={ref}
            className="container mx-auto flex flex-1 flex-col"
        >

            <div className="my-10 grid h-full w-full max-w-screen-xl auto-rows-fr grid-cols-1 items-stretch justify-around gap-6 md:grid-cols-2 md:gap-8">
                {statVals.map((stat, index) => (
                    <StatItem
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        index={index}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default Stats
