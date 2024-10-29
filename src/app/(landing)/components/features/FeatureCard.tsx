import React from 'react'
import Image from 'next/image'
import { motion, MotionStyle, MotionValue, useTransform } from 'framer-motion'
import { AutoplayVideo } from '@/components/AutoplayVideo'

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
            className={`${backgroundColor} flex max-h-[555px] h-[80vh] w-[90vw] md:w-[40vw] max-w-[400px]  flex-col gap-5  rounded-2xl overflow-hidden p-4 md:mr-2.5 md:p-8 relative shadow-cartoon border-4 border-black`}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            style={
                style
            }
        >
            {isComingSoon && (
                <motion.div className="absolute left-0 top-0 h-full w-full flex-1 backdrop-blur-lg z-10 flex justify-center items-center">
                    <p className='text-3xl font-oswald track'>Coming Soon</p>
                </motion.div>
            )}
            <motion.div className="flex flex-col">
                <h3 className="self-start text-3xl tracking-wide">{title}</h3>
                <p className="mt-4 w-full text-lg opacity-70">{description}</p>
            </motion.div>
            <motion.div className="relative h-full w-full flex-1">
                {/* <Image
                    // loading="lazy"
                    src={imageSrc}
                    alt={title}
                    className="aspect-[1.25] object-contain"
                    fill
                /> */}
                <AutoplayVideo>
                    <source src={`${imageSrc}.webm`} type="video/mp4" />
                    <source src={`${imageSrc}.mov`} type="video/quicktime" />
                </AutoplayVideo>
            </motion.div>
        </motion.div>
    )
}

export default FeatureCard
