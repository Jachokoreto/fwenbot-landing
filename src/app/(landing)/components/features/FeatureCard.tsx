import React from 'react'

interface FeatureCardProps {
    title: string
    description: string
    imageSrc: string
    backgroundColor: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    imageSrc,
    backgroundColor,
}) => {
    return (
        <section
            className={`h-full overflow-hidden px-8 py-8 ${backgroundColor} rounded-2xl max-md:mr-2.5 max-md:max-w-full max-md:pl-5`}
        >
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
                    <div className="-mr-11 flex flex-col max-md:mt-8">
                        <h2 className="self-start text-3xl font-semibold">
                            {title}
                        </h2>
                        <p className="mt-4 text-xl opacity-80">{description}</p>
                    </div>
                </div>
                <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        src={imageSrc}
                        alt={title}
                        className="mt-4 aspect-[1.25] w-full grow object-contain max-md:mt-10"
                    />
                </div>
            </div>
        </section>
    )
}

export default FeatureCard
