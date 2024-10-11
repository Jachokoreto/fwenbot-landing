import { motion, useScroll } from 'framer-motion'
import { init } from 'next/dist/compiled/webpack/webpack'
import React from 'react'

const StatItem = ({ title, value }: { title: string; value: string }) => {
    return (
        <motion.div
            className="flex flex-col items-center"
            variants={{
                initial: {
                    opacity: 0,
                    y: 50,
                },
                scrollIn: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        ease: 'easeInOut',
                    },
                },
            }}
        >
            <h3 className="mb-2 text-5xl font-medium">
                {value}
                <span className="opacity-50">+</span>
            </h3>
            <p className="">{title}</p>
        </motion.div>
    )
}

const Stats = () => {
    return (
        <motion.div
            className="mx-auto mb-16 mt-10 flex max-w-screen-xl flex-wrap items-center justify-around "
            initial={'initial'}
            whileInView={'scrollIn'}
            variants={{
                scrollIn: {
                    transition: {
                        staggerChildren: 0.2,
                    },
                },
            }}
            viewport={{ amount: 'all' }}
        >
            <StatItem title="Total Trade Volume" value="100" />
            <StatItem title="Total Users" value="1.2K" />
            <StatItem title="Lifetime Volume" value="$88B" />
            <StatItem title="Total Trade" value="100" />
        </motion.div>
    )
}

export default Stats
