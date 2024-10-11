import { motion } from 'framer-motion'
import React from 'react'
import Header from './Header'
import MainContent from './MainContent'

const HeroSection = () => {
    return (
        <motion.div
            className="flex h-screen w-full flex-col justify-center px-9 max-md:max-w-full max-md:px-5"
            whileInView={'scrollIn'}
            initial="initial"
        >
            {/* <FloatingObjects /> */}
            {/* <AnimatedBg /> */}
            <Header logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/92be01a40e42b2667bf2ed01c42a67c00773eeedf8c9125b7bf8a471aaf3fd01?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171" />
            <MainContent
                logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/13407141527d89e115fe164c62d811c4746e5236a469f1e5aeaeb8850cae1456?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
                poweredByLogoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c3c4d1d42b38e9a6f9a8af3a7ef466a4a9bcb8ca1ba2529c302a37f04287fb05?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
            />
        </motion.div>
    )
}

export default HeroSection
