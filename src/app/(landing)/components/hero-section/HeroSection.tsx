import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Header from './Header'
import MainContent from './MainContent'

const HeroSection = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'center start'],
        layoutEffect: false
    })
    const backgroundColour = useTransform(
        scrollYProgress,
        [0, 0.5],
        ['#fff0', '#fef08a']
    )
    return (
        <motion.section
            className="h-[140vh]"
        // style={{ background: backgroundColour }}
        >
            {/* <FloatingObjects /> */}
            {/* <AnimatedBg /> */}

            <MainContent
                logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/13407141527d89e115fe164c62d811c4746e5236a469f1e5aeaeb8850cae1456?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
                poweredByLogoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c3c4d1d42b38e9a6f9a8af3a7ef466a4a9bcb8ca1ba2529c302a37f04287fb05?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
            />
        </motion.section>
    )
}

export default HeroSection
