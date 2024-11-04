import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import MainContent from './MainContent'

const HeroSection = () => {
    return (
        <motion.section
            className="h-[140vh]"
        // style={{ background: backgroundColour }}
        >
            {/* <FloatingObjects /> */}
            {/* <AnimatedBg /> */}

            <MainContent
                poweredByLogoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c3c4d1d42b38e9a6f9a8af3a7ef466a4a9bcb8ca1ba2529c302a37f04287fb05?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
            />
        </motion.section>
    )
}

export default HeroSection
