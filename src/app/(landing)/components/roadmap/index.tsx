import React from 'react'
import PhaseCard from './PhaseCard'

interface RoadmapProps {}

const Roadmap: React.FC<RoadmapProps> = () => {
    const phases = [
        {
            number: 1,
            items: [
                'Lorem ipsum dolor sit amet consectetur.',
                'Lorem ipsum dolor sit amet consectetur.',
                'Lorem ipsum dolor sit amet consectetur.',
            ],
        },
        {
            number: 2,
            items: [
                'Lorem ipsum dolor sit amet consectetur.',
                'Lorem ipsum dolor sit amet consectetur.',
                'Lorem ipsum dolor sit amet consectetur.',
                'Lorem ipsum dolor sit amet consectetur.',
            ],
        },
        {
            number: 3,
            items: [
                'Lorem ipsum dolor sit amet consectetur.',
                'Lorem ipsum dolor sit amet consectetur.',
            ],
        },
    ]

    return (
        <section className="container my-20 flex w-full flex-col items-start self-center overflow-hidden rounded-[32px] bg-yellow-400 pb-16 pl-14 pt-7 max-md:mt-10 max-md:max-w-full max-md:pl-5">
            <h1 className="text-6xl font-bold max-md:text-4xl">Roadmap</h1>
            <p className="mt-4 text-xl text-black">
                Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="mt-8 flex gap-5 self-stretch max-md:max-w-full max-md:flex-col">
                {phases.map((phase, index) => (
                    <PhaseCard
                        key={index}
                        phaseNumber={phase.number}
                        items={phase.items}
                        className={index === 2 ? 'w-[23%]' : 'w-[39%]'}
                    />
                ))}
            </div>
        </section>
    )
}

export default Roadmap
