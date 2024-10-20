import { motion, useScroll, useTransform } from 'framer-motion'
import { MutableRefObject, useRef, useState } from 'react'
import { phases } from './phases'
import Phase from './Phase'

const RoadMap = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const divRef = useRef<HTMLDivElement | null>(null)
    const [selectedPhase, setSelectedPhase] = useState(0)
    const { scrollYProgress: containerYProgress } = useScroll({
        target: containerRef,
        offset: ['start 90%', 'start 60%'],
    })
    const { scrollYProgress } = useScroll({
        target: divRef,
        offset: ['50% end', 'end 95%'],
    })
    const width = useTransform(containerYProgress, [0, 1], [2560, 8])

    return (
        <section className="flex h-full min-h-screen w-full justify-center">
            <div className="container h-full w-full" ref={containerRef}>
                <div className="relative h-full w-full">
                    <div className="h-full w-full flex-col space-x-0 space-y-5 py-32 lg:flex lg:space-x-5 lg:space-y-0">
                        <div className="flex w-full flex-col space-y-5 lg:w-[40%]">
                            <h1>Roadmap</h1>
                            <p className="text-2xl">
                                We&apos;re actively listening to our community
                                and working on innovative tools that empower our
                                members with a competitive edge. With that in
                                mind, here&apos;s a glimpse of what lies ahead
                                for Fwen Bot. Our roadmap outlines the key
                                milestones and exciting developments we&apos;re
                                working on to bring our vision to life. Together
                                with our community, we build the future of
                                crypto trading on Discord.
                            </p>
                        </div>
                        <div
                            className="relative flex h-full w-full flex-1"
                            ref={divRef}
                        >
                            <div className="flex flex-1 flex-col space-y-3">
                                {phases.map((phase: any, index: number) => {
                                    return (
                                        <Phase
                                            key={index}
                                            phase={phase}
                                            scrollY={scrollYProgress}
                                            index={index}
                                            selectedPhase={selectedPhase}
                                            setSelectedPhase={setSelectedPhase}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <motion.div
                        className="absolute right-0 top-0 -z-10 h-full opacity-50"
                        style={{
                            background:
                                'linear-gradient(180deg, #FEF08A 0%, #CFF7D1 80%, #BDE0FE 100%)',
                            width,
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default RoadMap
