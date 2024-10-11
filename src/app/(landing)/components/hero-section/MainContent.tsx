import React from 'react'
import Button from '@/components/Button'
import { motion, stagger } from 'framer-motion'
import Link from 'next/link'
import { Fwenbot } from './Fwenbot'

interface MainContentProps {
    logoSrc: string
    poweredByLogoSrc: string
}

const items = {
    initial: {
        opacity: 0,
        y: 20,
    },
    scrollIn: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            // delay: 0.5
            // staggerChildren: 0.2,
        },
    },
}

const MainContent: React.FC<MainContentProps> = ({
    logoSrc,
    poweredByLogoSrc,
}) => {
    return (
        <motion.div className="mt-3 flex w-full items-center justify-center gap-5 pb-16 max-md:flex-col z-10">
            <motion.div
                className="flex w-full flex-col items-center font-medium max-md:mt-10 max-md:max-w-full"
                variants={{
                    scrollIn: {
                        transition: { staggerChildren: 0.2 },
                    },
                }}
            >
                {/* <video  muted autoPlay playsInline className='w-full'>
                    <source src="/Idle_export_1.mov" type="video/mp4" />
                </video> */}

                <Fwenbot />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {/* <img
                    loading="lazy"
                    src={logoSrc}
                    alt="Main Logo"
                    className="aspect-[3.46] w-[266px] max-w-full object-contain"
                /> */}
                <motion.div
                    className="mt-2 flex w-[132px] max-w-full gap-3.5 text-center text-base text-opacity-80"
                    variants={items}
                >
                    <span className="my-auto">powered by</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        loading="lazy"
                        src={poweredByLogoSrc}
                        alt="Powered by Logo"
                        className="aspect-[1.04] w-[29px] shrink-0 object-contain"
                    />
                </motion.div>
                <motion.h1
                    className="mt-7 text-6xl font-semibold max-md:max-w-full max-md:text-4xl"
                    variants={items}
                >
                    Everyone needs a Fwen
                </motion.h1>
                <Link href="https://discord.gg/rYzN89rG3G">
                    <Button
                        text="Get Started"
                        primary
                        className="mt-6"
                        variant={items}
                    />
                </Link>
            </motion.div>
            <Link href="https://discord.gg/rYzN89rG3G">
                <Button
                    text="add bot"
                    className="fixed bottom-4 right-4 z-10"
                />
            </Link>
        </motion.div>
    )
}

export default MainContent
