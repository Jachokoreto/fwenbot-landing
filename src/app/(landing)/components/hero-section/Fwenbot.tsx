import { AutoplayVideo } from '@/components/AutoplayVideo';
import { motion, MotionValue, useTransform } from 'framer-motion'
import React, { useEffect } from 'react'

const variant = {
    initial: {
        y: 40,
        opacity: 0,
        // scaleX: 0,
    },
    fadeIn: (i: number) => ({
        y: 0,
        // scaleX: "100%",
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: i * 0.15 + 0.8,
            ease: "linear"
        },
    }),
}

const Letter = ({ children, custom, propY }: { children: string; custom: number, propY: MotionValue<number> }) => {
    const y = useTransform(() => Math.min(propY.get() * -500 + custom * 50, 0));

    return (
        <motion.p variants={variant} custom={custom} className="text-[20vw]" style={{ y }}>
            {children}
        </motion.p>
    )
}

export const Fwenbot = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>
}) => {
    return (
        <motion.div
            className="relative flex select-none items-center"
            initial="initial"
            animate="fadeIn"
        >
            <motion.div className="font-bebas-neue flex gap-3">
                <Letter custom={4} propY={scrollYProgress}>F</Letter>
                <Letter custom={3} propY={scrollYProgress}>W</Letter>
                <Letter custom={2} propY={scrollYProgress}>E</Letter>
                <Letter custom={1} propY={scrollYProgress}>N</Letter>
            </motion.div>

            <motion.div
                className="w-[20vw] mb-3"
                // variants={variant}
                custom={1}
                initial={{
                    x: "-30%",
                    opacity: 0
                }}
                animate={{
                    x: ["-30%", "-30%", 0],
                    opacity: [0, 1, 1]
                }}
                transition={{ ease: "linear", times: [0, 0.8, 1], duration: 1 }}

            >
                <AutoplayVideo>
                    <source src="/assets/idle.webm" type="video/mp4" />
                    <source src="/assets/idle.mov" type="video/quicktime" />
                </AutoplayVideo>
            </motion.div>
            <motion.div className="font-bebas-neue flex gap-3 ">
                <Letter custom={1} propY={scrollYProgress}>B</Letter>
                <Letter custom={2} propY={scrollYProgress}>O</Letter>
                <Letter custom={3} propY={scrollYProgress}>T</Letter>
            </motion.div>
        </motion.div>
    )
}
