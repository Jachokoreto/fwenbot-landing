import React from 'react'
import Image from 'next/image'
import { motion, MotionStyle, MotionValue, useTransform } from 'framer-motion'

interface FeatureCardProps {
    title: string
    description: string
    imageSrc: string
    backgroundColor: string
    isComingSoon: boolean
    style: MotionStyle
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    imageSrc,
    backgroundColor,
    isComingSoon,
    style
}) => {
    return (
        <motion.div
            className={`${backgroundColor} flex max-h-[555px] h-[80vh] w-[90vw] md:w-[40vw] max-w-[400px]  flex-col gap-5 overflow-hidden rounded-2xl p-4 md:mr-2.5 md:p-8 md:pl-5 relative`}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            style={{
                // scale: useTransform(scrollYProgress, [0.5, 0.6], [0.6, 1])
            }}
        >
            {isComingSoon && (
                <motion.div className="absolute left-0 top-0 h-full w-full flex-1 backdrop-blur-lg z-10 flex justify-center items-center">
                    <p className='text-3xl font-oswald track'>Coming Soon</p>
                </motion.div>
            )}
            <motion.div className="flex flex-col">
                <h3 className="self-start text-2xl font-medium">{title}</h3>
                <p className="mt-4 w-full text-lg opacity-80">{description}</p>
            </motion.div>
            <motion.div className="relative h-full w-full flex-1">
                <Image
                    // loading="lazy"
                    src={imageSrc}
                    alt={title}
                    className="aspect-[1.25] object-contain"
                    fill
                />
            </motion.div>
        </motion.div>
    )
}

export default FeatureCard
