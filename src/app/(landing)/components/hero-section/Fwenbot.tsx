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

const Letter = ({ children, custom, propY }: { children: string; custom: number, propY:MotionValue<number> }) => {
    const y = useTransform(() => Math.min(propY.get() * -500 + custom * 50, 0));

    return (
        <motion.p variants={variant} custom={custom} className="" style={{y}}>
            {children}
        </motion.p>
    )
}

export const Fwenbot = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>
}) => {

    // const y = useTransform(scrollYProgress, [0, 1], [0, -400])
    return (
        <motion.div
            className="relative flex select-none items-center"
            initial="initial"
            animate="fadeIn"
        >
            <motion.div className="font-bebas-neue flex gap-3 text-[20vw]">
                <Letter custom={4} propY={scrollYProgress}>F</Letter>
                <Letter custom={3} propY={scrollYProgress}>W</Letter>
                <Letter custom={2} propY={scrollYProgress}>E</Letter>
                <Letter custom={1} propY={scrollYProgress}>N</Letter>
            </motion.div>
            {/* <motion.img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/824b838f6ddb638d7227637257c1860771fd765129f679b107de404472148f4e?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
                alt="Decorative Image"
                className="mt-14 aspect-[0.81] w-[231px] max-w-full self-center object-contain max-md:mt-10"
            /> */}
            {/* <div className='bg-red-500 size-10 absolute top-10 left-1/2 -translate-x-1/2'></div> */}
            <motion.video
                autoPlay
                muted
                loop
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
            
                transition={{ease:"linear", times: [0, 0.8, 1], duration: 1 }}
            >
                <source src="/assets/Idle_1.webm" type="video/mp4" />
            </motion.video>
            <motion.div className="font-bebas-neue flex gap-3 text-[20vw]">
                <Letter custom={1} propY={scrollYProgress}>B</Letter>
                <Letter custom={2} propY={scrollYProgress}>O</Letter>
                <Letter custom={3} propY={scrollYProgress}>T</Letter>
            </motion.div>
        </motion.div>
    )
}
