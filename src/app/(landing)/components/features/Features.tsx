import React, { use, useEffect } from 'react'
import FeatureCard from './FeatureCard'
import { cubicBezier, easeIn, easeInOut, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useResizeObserver } from 'usehooks-ts'
import useSpringScroll from '@/hooks/useSpringScroll'
import WhyChooseFwenbot from '../why-choose-fwenbot'

const features = [
    {
        title: "Shiller's Profit",
        description:
            'Transform your everyday Alpha Calls and trading tips with our innovative shilling feature — share valuable projects to the community and earn rewards from every successful trade.',
        imageSrc: '/assets/shiller',
        backgroundColor: 'bg-accent',
        isComingSoon: false,
    },
    {
        title: 'Simplistic Buy & Sell',
        description:
            "Trading is made simple with Fwen Bot's intuitive interface, allowing you to execute buy and sell orders directly within Discord.",
        imageSrc: '/assets/trading',
        backgroundColor: 'bg-contrast',
        isComingSoon: false,
    },
    {
        title: 'Fwenbot Sniping',
        description:
            "Trading is made simple with Fwen Bot's intuitive interface, allowing you to execute buy and sell orders directly within Discord.",
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/954577fb4a47d02e8bb068b5f27a042fd4d20f3b5d5b60670909bc3ad1d49783?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        backgroundColor: 'bg-accent',
        isComingSoon: true,
    },

]

const Features: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const childRef = React.useRef(null)
    const scrollYProgress = useSpringScroll({
        ref: ref,
        offset: ['start end', 'end end']
    })
    const { width = 0 } = useResizeObserver({
        ref: childRef,
        box: 'border-box',
    })
    const { width: containerW = 0 } = useResizeObserver({
        ref: containerRef,
        box: 'content-box',
    })
    const [offset, setOffset] = React.useState(0)

    useEffect(() => {
        if (ref.current) {
            if (width < containerW) {
                setOffset(0)
            } else
                setOffset(-(width - containerW))
        }
    }, [ref, width])

    return (
        <motion.section
            ref={ref}
            className="mb-20 mt-10 h-[200vh]"
        >
            <div className='sticky h-screen min-h-fit py-10 top-0 container overflow-hidden flex flex-col mx-auto justify-center'
                ref={containerRef}
            >
                {/* <motion.h1
                    className='leading-relaxed'

                    style={{ y: useTransform(scrollYProgress, [0, 0.3], ["100vh", "0vh"]) }}
                >
                    Effortless Trading, <br />Limitless Potential
                </motion.h1> */}
                <WhyChooseFwenbot />

                {/* <motion.p>
                    Automate your trades with precision. Enjoy real-time analytics and performance monitoring, tailored for your needs.
                </motion.p> */}
                <motion.div className="mt-8 gap-5 flex w-fit"
                    ref={childRef}
                    style={{
                        y: useTransform(scrollYProgress, [0, 0.3], ["100vh", "0vh"]),
                        x: useTransform(scrollYProgress, [0.5, 0.8], [0, offset]),
                    }}
                >
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} style={{
                            y: useTransform(scrollYProgress, [0.1, 0.3 + index * 0.05], ["100vh", "0vh"]),
                        }} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Features
