import React from 'react'
import FeatureCard from './FeatureCard'
import { motion, useScroll, useTransform } from 'framer-motion'

const features = [
    {
        title: "Shiller's Profit",
        description:
            'Transform your everyday Alpha Calls and trading tips with our innovative shilling feature — share valuable projects to the community and earn rewards from every successful trade.',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/7570659f0e4f047c5bad7843ef2cb3d6ccb782483ff7d0a6db0abb698b067d56?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        backgroundColor: 'bg-yellow-400',
        isComingSoon: false,
    },
    {
        title: 'Simplistic Buy & Sell',
        description:
            "Trading is made simple with Fwen Bot's intuitive interface, allowing you to execute buy and sell orders directly within Discord.",
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/19479398f7f765c336391803d83468435e1b6424b1d7b666f4feef4945fb48c3?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        backgroundColor: 'bg-cyan-200',
        isComingSoon: false,
    },
    {
        title: 'Fwenbot Sniping',
        description:
            "Trading is made simple with Fwen Bot's intuitive interface, allowing you to execute buy and sell orders directly within Discord.",
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/954577fb4a47d02e8bb068b5f27a042fd4d20f3b5d5b60670909bc3ad1d49783?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        backgroundColor: 'bg-yellow-200',
        isComingSoon: true,
    },

]

const Features: React.FC = () => {
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end'],
    })
    return (
        <motion.section
            ref={ref}
            className="mb-20 mt-10 h-[200vh] py-10"
        // initial={'initial'}
        // whileInView={'scrollIn'}
        // viewport={{ amount: 'some', once: true }}
        // variants={{
        //     scrollIn: {
        //         transition: { staggerChildren: 0.2 },
        //     },
        // }}
        >
            <div className='sticky h-screen top-0 container overflow-hidden flex flex-col'>

                <motion.h1
                    className='mt-10 leading-relaxed'

                    style={{ y: useTransform(scrollYProgress, [0, 0.3], ["100vh", "0vh"]) }}
                >
                    Effortless Trading, <br />Limitless Potential
                </motion.h1>
                {/* <motion.p>
                    Automate your trades with precision. Enjoy real-time analytics and performance monitoring, tailored for your needs.
                </motion.p> */}
                <motion.div className="mt-8 gap-5 flex w-fit"
                    style={{ x: useTransform(scrollYProgress, [0.5, 0.8], ["0%", "-50%"]) }}
                >
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} style={{
                            y: useTransform(scrollYProgress, [0.1 + index * 0.1, 0.3 + index * 0.1], ["100vh", "0vh"]),
                        }} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Features
