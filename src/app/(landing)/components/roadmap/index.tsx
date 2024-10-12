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
    const [isMobile, setIsMobile] = useState(false)
    const { scrollYProgress } = useScroll({
        target: divRef,
        offset: isMobile ? ['start end', '70% center'] : ['35% end', 'end end'],
    })
    const [selectedPhase, setSelectedPhase] = useState(0)

    useEffect(() => {
        if (divRef && divRef.current) {
            if (divRef.current.clientWidth < 1024) setIsMobile(true)
        }
    }, [divRef])

    return (
        <section className="flex h-full items-center justify-center py-32 lg:h-screen lg:py-0">
            <div className="container relative flex h-fit w-full flex-col space-y-5 lg:h-[840px] lg:flex-row lg:space-x-14 lg:space-y-0 xl:h-[784px] xl:space-x-16">
                <div className="flex w-full flex-col space-y-5 lg:w-[40%]">
                    <p className="font-oswald text-[90px] font-bold">Roadmap</p>
                    <p className="text-2xl leading-relaxed tracking-wide">
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
                        className="absolute right-0 top-0 h-full w-2 rounded-full opacity-50"
                        style={{
                            background:
                                'linear-gradient(180deg, rgba(255,172,129,1) 0%, rgba(255,146,139,1) 20%, rgba(254,195,166,1) 40%, rgba(239,233,174,1) 60%, rgba(189,224,254,1) 80%, rgba(205,234,192,1) 100%)',
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default RoadMap
