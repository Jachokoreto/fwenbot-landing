import type { MotionValue } from 'framer-motion';
import { motion, useTransform } from 'framer-motion';
import React from 'react';

import { AutoplayVideo } from '@/components/AutoplayVideo';

type FeatureCardProps = {
    title: string;
    description: string;
    imageSrc: string;
    backgroundColor: string;
    isComingSoon: boolean;
    index: number;
    scrollYProgress: MotionValue<number>;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    imageSrc,
    backgroundColor,
    isComingSoon,
    index,
    scrollYProgress
}) => {
    return (
        <motion.div
            className={`${backgroundColor} relative flex h-[70vh] w-[90vw] max-w-[400px] flex-col gap-5  overflow-hidden rounded-2xl  border-4 border-black p-4 shadow-cartoon md:mr-2.5 md:h-[80vh] md:max-h-[555px] md:w-[40vw] md:p-8`}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            style={{
                y: useTransform(scrollYProgress, [0.1, 0.3 + index * 0.05], ['100vh', '0vh'])
            }}
        >
            {isComingSoon && (
                <motion.div className="absolute left-0 top-0 z-10 flex size-full flex-1 items-center justify-center backdrop-blur-lg">
                    <p className="track font-oswald text-3xl">Coming Soon</p>
                </motion.div>
            )}
            <motion.div className="flex flex-col">
                <h3 className="self-start text-3xl tracking-wide">{title}</h3>
                <p className="mt-4 w-full text-lg opacity-70">{description}</p>
            </motion.div>
            <motion.div className="relative size-full flex-1">
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
        </motion.div >
    );
};

export default FeatureCard;
