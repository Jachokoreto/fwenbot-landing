import { useScroll, motion, useTransform, useMotionValueEvent } from 'framer-motion'
import { init } from 'next/dist/compiled/webpack/webpack';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useScreen } from 'usehooks-ts';

export const CustomFAB = () => {
    const { scrollY } = useScroll();

    return (
        <Link href="https://discord.gg/rYzN89rG3G">
            <motion.button
                className='fixed bottom-8 left-1/2 -translate-x-1/2 bg-cyan-200 border-2 border-black py-2 px-4 rounded-full shadow-cartoon flex items-center overflow-hidden'
                layout
                whileHover={'hover'}
                initial={'initial'}
                transition={{
                    layout: { duration: 0.3 }
                }}
                variants={{
                    initial: {
                        width: "70px",
                    },
                    hover: {
                        width: "240px",
                    }
                }}
            >
                <motion.div className='size-10 relative'
                    animate={{
                        rotate: [0, 10, 0, -10, 0],
                        transition: {
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeIn',
                            repeatDelay: 3

                        }
                    }}
                >
                    <Image src="/mascot.png" fill objectFit='contain' alt="logo" />
                </motion.div>
                <motion.p
                    className='ml-12 text-lg font-medium whitespace-nowrap absolute'
                    variants={{
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        hover: {
                            opacity: 1,
                            x: 0,
                        }
                    }}
                    transition={{ duration: 0.3 }}
                >
                    Add bot to server
                </motion.p>
            </motion.button>
        </Link>
    )
}
