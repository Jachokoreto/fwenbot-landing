import React from 'react'
import PhaseCard from './PhaseCard'
import { motion } from 'framer-motion'
import { useResizeObserver, useScreen } from 'usehooks-ts'

const phases = [
    {
        number: 1,
        items: [
            'Release of MVP to introduce Fwen Bot.',
            'Intuitive trading features which allows users to buy and sell on Discord.',
            'Shilling features which allows users to share great tokens within their communities.',
        ],
    },
    {
        number: 2,
        items: [
            'Introduction to advanced sniping features that allow users to execute trades with precision timing, targeting the best possible entry points.',
            'Limit Orders & Stop loss functionalities that enables users to set predefined price levels to ensure that they never miss a beat.',
        ],
    },
    {
        number: 3,
        items: [
            'Introduce tools that allow users to track wallets of their choice on huge movements made by whales. ',
            'AI-driven features that offer predictive analytics and market trend analysis to ensure that our community members are always well-informed every step of the way.',
        ],
    },
    {
        number: 4,
        items: [
            'Introduce support for multi-chain wallets, enabling users to manage their assets across chains.',
            'Feature whereby users can trade beyond Solana and Pump Fun.',
        ],
    },
    {
        number: 5,
        items: [
            'By going through tokenization, we aim to empower the community by giving them a voice in the future developments and direction of Fwen Bot.',
            'Tokenization will also provide users with more incentives, such as being eligible for a revenue-sharing model that allows them to earn a portion of the fees generated by Fwen Bot.',
        ],
    },
    {
        number: 6,
        items: [
            'We are just getting started and Fwen Bot is committed to ongoing developments with more groundbreaking features and enhancements on the horizon.',
            'More updates and announcements are in the pipeline and we are looking to explore new possibilities and push boundaries together with our community.',
        ],
    },
]

interface RoadmapProps { }

const Roadmap: React.FC<RoadmapProps> = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    const boxRef = React.useRef<HTMLDivElement>(null)

    const { width = 0, height = 0 } = useResizeObserver({
        ref,
        box: 'border-box',
    })

    const { width: boxWidth = 0 } = useResizeObserver({
        ref: boxRef,
        box: 'content-box',
    })

    return (
        <section
            className="container relative my-20 flex w-full flex-col items-start self-center overflow-hidden rounded-[32px] bg-yellow-400  py-6 max-md:mt-10 max-md:max-w-full"
            ref={boxRef}
        >
            <h1 id="roadmap" className="z-10 text-6xl font-bold max-md:text-4xl">Roadmap</h1>
            <p className="z-10 mt-4 text-xl text-black">
                We&apos;re actively listening to our community and working on
                innovative tools that empower our members with a competitive
                edge. With that in mind, here&apos;s a glimpse of what lies
                ahead for Fwen Bot. Our roadmap outlines the key milestones and
                exciting developments we&apos;re working on to bring our vision
                to life. Together with our community, we build the future of
                crypto trading on Discord.
            </p>
            <motion.div
                ref={ref}
                className="no-scrollbar relative z-10 mt-8 flex gap-12 overscroll-auto p-2"
                drag={'x'}
                dragConstraints={{
                    left: -(width - (boxWidth)),
                    right: 0,
                }}
            >
                {phases.map((phase, index) => (
                    <PhaseCard
                        key={`phase-${index}`}
                        phaseNumber={phase.number}
                        items={phase.items}
                    // className={index === 2 ? 'w-[23%]' : 'w-[39%]'}
                    />
                ))}
                <div className="absolute left-1/2 top-10 w-[80%] -translate-x-1/2 border-b-4 border-gray-800" />
            </motion.div>
            <div className="absolute -left-2 -top-2 z-0 aspect-square w-1/4 rounded-full bg-gradient-to-br from-yellow-200 to-transparent" />
        </section>
    )
}

export default Roadmap
