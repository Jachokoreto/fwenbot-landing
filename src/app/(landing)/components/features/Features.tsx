import React from 'react'
import FeatureCard from './FeatureCard'

const features = [
    {
        title: "Shiller's Profit",
        description:
            "Trading is made simple with Fwen Bot's intuitive interface, allowing you to execute buy and sell orders directly within Discord.",
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/7570659f0e4f047c5bad7843ef2cb3d6ccb782483ff7d0a6db0abb698b067d56?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        backgroundColor: 'bg-yellow-400',
    },
    {
        title: 'Fwenbot Sniping',
        description:
            "Trading is made simple with Fwen Bot's intuitive interface, allowing you to execute buy and sell orders directly within Discord.",
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/954577fb4a47d02e8bb068b5f27a042fd4d20f3b5d5b60670909bc3ad1d49783?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        backgroundColor: 'bg-cyan-200',
    },
    {
        title: 'Simplistic Buy & Sell',
        description:
            "Trading is made simple with Fwen Bot's intuitive interface, allowing you to execute buy and sell orders directly within Discord.",
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/19479398f7f765c336391803d83468435e1b6424b1d7b666f4feef4945fb48c3?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        backgroundColor: 'bg-cyan-200',
    },
    {
        title: 'Advanced Trading Tools',
        description:
            "Trading is made simple with Fwen Bot's intuitive interface, allowing you to execute buy and sell orders directly within Discord.",
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/ed6ec0b539f74c052bfa8e1b7fc8e0a940665477b8144030c7b6eb2bb67de490?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        backgroundColor: 'bg-yellow-400',
    },
]

const Features: React.FC = () => {
    return (
        <section className="container my-20 overflow-hidden px-6">
            <h1 className="ml-2.5 self-start text-6xl font-semibold leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Let FwenBot <br /> support your trading
            </h1>
            <div className="mt-8 flex gap-3 max-md:flex-col">
                <div className="flex flex-1 flex-col gap-3 max-md:ml-0 max-md:w-full">
                    {features.slice(0, 2).map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
                <div className="flex w-full flex-1 flex-col gap-3 max-md:mt-10 max-md:max-w-full">
                    {features.slice(2).map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features