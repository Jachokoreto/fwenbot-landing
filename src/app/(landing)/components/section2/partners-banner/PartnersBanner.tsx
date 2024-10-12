/**
 * This code was generated by Builder.io.
 */
import * as React from 'react'
import { motion, MotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'

interface PartnersBannerProps {
    scrollYProgress: MotionValue<number>
}

const PartnersBanner: React.FC<PartnersBannerProps> = ({ scrollYProgress }) => {
    const images = [
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b9840c2b72d15415f33d13382ea6d0f1680bebb3381d9d06a4737774dceea29?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
            alt: 'Description of image 1',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d58a740929f80abdde37c4e66f75218a6b57c16dbc57f54b345422f00b8ea0bc?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
            alt: 'Description of image 2',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/96c460f5814e5abee445e108cce84dcfcfdf62758c2dc61591700a07ee30b5c4?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
            alt: 'Description of image 3',
        },
    ]

    const transfromY = (
        scrollYProgress: MotionValue<number>,
        index: number
    ) => {
        return useTransform(scrollYProgress, [0.2, index + 2 / 10], [200, 0])
    }

    return (
        <div className="container mx-auto my-3 flex w-full flex-col items-center min-h-[100px]">
            <motion.div className="mt-10 flex w-full justify-between gap-5">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="relative aspect-[3.69] flex-1 w-[255px] object-contain"
                    >
                        <Image
                            loading="lazy"
                            src={image.src}
                            alt={image.alt}
                            fill
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default PartnersBanner
