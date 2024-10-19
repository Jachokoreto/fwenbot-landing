import {
    AnimatePresence,
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { phases } from './phases'
import Phase from './Phase'

const RoadMap = () => {
    const divRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: divRef,
        offset: ['50% end', 'end 95%'],
    })
    const [selectedPhase, setSelectedPhase] = useState(0)

    return (
        <section className="flex h-full items-center justify-center py-32 lg:h-screen lg:py-0">
            <div className="container relative flex h-fit w-full flex-col space-y-5 lg:h-[840px] lg:flex-row lg:space-x-14 lg:space-y-0 xl:h-[784px] xl:space-x-16">
                <div className="flex w-full flex-col space-y-5 lg:w-[40%]">
                    <h1>Roadmap</h1>
                    <p className="text-2xl">
                        We&apos;re actively listening to our community and
                        working on innovative tools that empower our members
                        with a competitive edge. With that in mind, here&apos;s
                        a glimpse of what lies ahead for Fwen Bot. Our roadmap
                        outlines the key milestones and exciting developments
                        we&apos;re working on to bring our vision to life.
                        Together with our community, we build the future of
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
                    <div
                        className="absolute right-0 top-0 -z-10 h-full w-2 rounded-full opacity-50"
                        style={{
                            background:
                                'linear-gradient(180deg, #FEF08A 0%, #CFF7D1 80%, #BDE0FE 100%)',
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default RoadMap
