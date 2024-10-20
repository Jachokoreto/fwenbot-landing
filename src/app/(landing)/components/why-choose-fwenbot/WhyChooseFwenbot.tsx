import React from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import useSpringScroll from '@/hooks/useSpringScroll'

const WhyChooseFwenbot = () => {
    const ref = React.useRef(null)
    const scrollYProgress = useSpringScroll({
        ref: ref,
        offset: ['start end', 'end start']
    })
    return (
        <motion.section className="container my-20 overflow-hidden mx-auto"
            style={{
                // y: useTransform(scrollYProgress, [0, 0.3], ["50vh", "0vh"]),
                opacity: useTransform(scrollYProgress, [0, 0.6], [0, 1])
            }}
            ref={ref}
        >
            <h1 className="ml-2.5 self-start max-md:max-w-full max-md:text-4xl max-md:leading-10">
                {/* Features to<br /> support your trading */}
                Why choose FwenBot?
            </h1>
            <p className="ml-2.5 mt-6 text-xl">
                With the thought of our friends in mind, we want Fwen Bot to be
                as welcoming and intuitive as possible. <br /> <br />
                Our bot is designed with a strong focus on user experience,
                ensuring that whether you&apos;re a seasoned trader or new to
                the crypto space, Fwen Bot will always be your number one
                choice.
            </p>
        </motion.section>
    )
}

export default WhyChooseFwenbot
