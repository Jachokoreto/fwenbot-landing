import React, { useRef } from 'react'
import AddBotButton from './AddBotButton'
import HeroText from './HeroText'
import Button from '@/components/Button'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { AutoplayVideo } from '@/components/AutoplayVideo'

// Array of elements to animate
const elements = [
    { type: 'h1', content: 'As the saying goes,' },
    { type: 'h1', content: '"A friend in need' },
    { type: 'h1', content: 'is a friend indeed".' },
    {
        type: 'p',
        content:
            'Designed as a Discord Trading Bot, Fwen Bot provides the best support you need, whenever you need it.',
    },
]

const About = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>
}) => {
    // Generate transforms programmatically for each element
    const transforms = elements.map((_, index) => {
        const start = (index + 1) / 10
        const end = Math.min(start + 0.2, 1)
        return useTransform(scrollYProgress, [start, end], [500, 0])
    })
    // const exitY = useTransform(scrollYProgress, [0.95, 1], ["-50%", "-60%"])
    const exitY = useTransform(scrollYProgress, [0.95, 1], ["-50%", "-60%"])

    const imageScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [0, 1, 1, 0])
    const imageY = useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [-1000, 0, 0, 1000])

    return (
        <motion.div
            className="sticky top-1/2 mx-auto w-[90vw] h-[90vh] overflow-hidden rounded-[40px] bg-yellow-400 container"
            style={{
                // y: exitY,
                y: useTransform(scrollYProgress, [0, 0.2], ["-45%", "-50%"]),
                scale: useTransform(scrollYProgress, [0.9, 1], [1, 0.5]),
            }}
            id="about"

        >
            <div className="mb-0 flex w-full h-full flex-col-reverse justify-center gap-2 md:gap-10 md:flex-row p-8 mx-auto">
                <div className="flex flex-col gap-5 w-full md:w-auto justify-center flex-1 md:max-w-[50%]">
                    {elements.map((element, index) => {
                        if (element.type === 'h1') {
                            return (
                                <motion.h1
                                    // id="about"
                                    key={index}
                                    className="font-normal"
                                    style={{ y: transforms[index] }}
                                >
                                    {element.content}
                                </motion.h1>
                            )
                        } else if (element.type === 'p') {
                            return (
                                <motion.p
                                    key={index}
                                    className="mt-2 md:mt-5 text-xl max-w-[480px] w-full"
                                    style={{ y: transforms[index] }}
                                // id={index === elements.length - 1 ? 'about' : ''}
                                >
                                    {element.content}
                                </motion.p>
                            )
                        }
                        return null
                    })}
                </div>
                <motion.div
                    className="mx-auto w-full md:w-auto md:max-w-[50%] h-1/3 md:h-full shrink-0 object-contain flex justify-center items-center"
                    style={{ scale: imageScale, y: imageY }}
                // id="about"

                >
                    {/* <AutoplayVideo>
                        <source src="/assets/idle.webm" type="vid" />
                        <source src="/assets/idle.mov" type="video/quicktime" />
                    </AutoplayVideo> */}
                    <img src="/assets/FwenBot-about-us.gif" alt="friends" />

                </motion.div>
            </div>
        </motion.div>
    )
}

export default About
