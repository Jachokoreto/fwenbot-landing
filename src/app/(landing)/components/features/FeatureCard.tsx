import React from 'react'
import Image from 'next/image'

interface FeatureCardProps {
    title: string
    description: string
    imageSrc: string
    backgroundColor: string
    isComingSoon: boolean
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    imageSrc,
    backgroundColor,
    isComingSoon,
}) => {
    return (
        <div
            className={`${backgroundColor} flex md:max-h-80 h-[400px] md:min-h-[300px] flex-col gap-5 overflow-hidden rounded-2xl p-4 md:mr-2.5 md:w-full md:flex-row md:p-8 md:pl-5 relative`}
        >
            {isComingSoon && (
                <div className="absolute left-0 top-0 h-full w-full flex-1 backdrop-blur-lg z-10 flex justify-center items-center">
                    <p className='text-3xl font-oswald track'>Coming Soon</p>
                </div>
            )}
            <div className="flex md:w-1/2 flex-col">
                <h3 className="self-start text-2xl font-medium">{title}</h3>
                <p className="mt-4 w-full text-lg opacity-80">{description}</p>
            </div>
            <div className="relative h-full w-full flex-1">
                <Image
                    // loading="lazy"
                    src={imageSrc}
                    alt={title}
                    className="aspect-[1.25] object-contain"
                    fill
                />
            </div>
        </div>
    )
}

export default FeatureCard
