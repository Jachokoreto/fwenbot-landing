import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
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
    const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1])
    const y = useTransform(scrollYProgress, [0.5, 0.8], [200, 0])

    return (
        <motion.div
            className="flex flex-col  bg-cyan-200 border-2 border-black p-6 rounded-[24px] h-[300px] justify-between max-sm:w-full md:flex-[40%] "
            // variants={{
            //     initial: {
            //         opacity: 0,
            //         y: 50,
            //     },
            //     scrollIn: {
            //         opacity: 1,
            //         y: 0,
            //         transition: {
            //             ease: 'easeInOut',
            //         },
            //     },
            // }}
            style={{ opacity, y }}
        >
            <p className=" text-3xl w-full">{title}</p>
            <h3 className=" text-[5rem] font-normal ml-auto">
                {value}
                <span className="opacity-50">+</span>
            </h3>
            {/* <p className=" text-lg w-full">{title}</p> */}

        </motion.div>
    )
}

const statVals = [
    { title: 'Total Trade Volume', value: '100' },
    { title: 'Total Users', value: '1.2K' },
    { title: 'Lifetime Volume', value: '$88B' },
    { title: 'Total Trade', value: '100' },
]

const Stats = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'start center'],
    })
    return (
        <motion.div
            ref={ref}
            className="container mx-auto flex flex-col flex-1"
            // initial={'initial'}
            // whileInView={'scrollIn'}
            // variants={{
            //     scrollIn: {
            //         transition: {
            //             staggerChildren: 0.2,
            //         },
            //     },
            // }}
            // viewport={{ amount: 'all' }}
        >
            {/* <StatItem scrollYProgress={scrollYProgress} title="Total Trade Volume" value="100" />
            <StatItem scrollYProgress={scrollYProgress} title="Total Users" value="1.2K" />
            <StatItem scrollYProgress={scrollYProgress} title="Lifetime Volume" value="$88B" />
            <StatItem scrollYProgress={scrollYProgress} title="Total Trade" value="100" /> */}
            <motion.h1 className='font-normal'>
                Capture the market with Fwenbot
            </motion.h1>
            <div className=' w-full gap-6 mb-16 mt-10 flex max-w-screen-xl flex-wrap items-center justify-around'>

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
