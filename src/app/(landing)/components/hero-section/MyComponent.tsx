/**
 * This code was generated by Builder.io.
 */
'use client'
import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import { motion } from 'framer-motion'

const MyComponent: React.FC = () => {
    const headerNavItems = ['Tokenomic', 'Roadmap', 'About us']

    return (
        <div className="flex w-full flex-col px-9 max-md:max-w-full max-md:px-5">
            <Header
                logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/92be01a40e42b2667bf2ed01c42a67c00773eeedf8c9125b7bf8a471aaf3fd01?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
                navItems={headerNavItems}
            />
            <motion.img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/824b838f6ddb638d7227637257c1860771fd765129f679b107de404472148f4e?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
                alt="Decorative Image"
                className="mt-14 aspect-[0.81] w-[231px] max-w-full self-center object-contain max-md:mt-10"
                animate={{ y: [0, -20, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <MainContent
                logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/13407141527d89e115fe164c62d811c4746e5236a469f1e5aeaeb8850cae1456?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
                poweredByLogoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c3c4d1d42b38e9a6f9a8af3a7ef466a4a9bcb8ca1ba2529c302a37f04287fb05?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
            />
        </div>
    )
}

export default MyComponent
