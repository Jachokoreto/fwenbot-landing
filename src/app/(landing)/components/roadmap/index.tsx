import { motion, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

import useSpringScroll from '@/hooks/useSpringScroll';

import Phase from './Phase';
import { phases } from './phases';

const RoadMap = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const divRef = useRef<HTMLDivElement | null>(null);
    const [selectedPhase, setSelectedPhase] = useState(0);
    // const { scrollYProgress: containerYProgress } = useScroll({
    //     target: containerRef,
    //     offset: ['start end', 'end end'],
    // })
    // // const { scrollYProgress } = useScroll({
    // //     target: divRef,
    // //     offset: ['50% end', 'end 95%'],
    // // })
    const scrollYProgress = useSpringScroll({
        ref: containerRef,
        offset: ['start end', 'end end'],
    });
    // const width = useTransform(containerYProgress, [0, 1], [2560, 8])
    // const width = useTransform(scrollYProgress, [0, 0.4], [2560, 8])

    return (
        <section className="relative flex h-[200vh] min-h-fit w-full justify-center">
            <div className="sticky top-0 h-screen min-h-fit w-full" ref={containerRef}>
                {/* <div className="relative h-full w-full"> */}
                <div className="container relative mx-auto flex size-full min-h-fit flex-col items-center space-x-0 space-y-5 py-10 lg:flex-row lg:space-x-5 lg:space-y-0">
                    <div className="flex w-full flex-col md:space-y-5 lg:w-2/5">
                        <motion.h1
                            style={{
                                x: useTransform(scrollYProgress, [0, 0.3], ['-100vw', '0vw']),
                            }}
                            id="roadmap"
                        >
                            Roadmap
                        </motion.h1>
                        <motion.p
                            className="md:text-2xl"
                            style={{
                                x: useTransform(scrollYProgress, [0.1, 0.3], ['-100vw', '0vw']),
                            }}
                        >
                            We&apos;re actively listening to our community
                            and working on innovative tools that empower our
                            members with a competitive edge. With that in
                            mind, here&apos;s a glimpse of what lies ahead
                            for Fwen Bot. Our roadmap outlines the key
                            milestones and exciting developments we&apos;re
                            working on to bring our vision to life. Together
                            with our community, we build the future of
                            crypto trading on Discord.
                        </motion.p>
                    </div>
                    {/* <div
                        className="relative flex h-full w-full flex-1"
                    > */}
                    <div
                        className="relative flex flex-1 flex-col justify-center space-y-3 md:h-full"
                        ref={divRef}
                    >
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
                            );
                        })}
                        {/* </div> */}
                        <motion.div
                            className="absolute right-0 top-0 -z-10 h-full w-2 origin-top opacity-50"
                            style={{
                                background:
                                    'linear-gradient(180deg, #FEF08A 0%, #CFF7D1 80%, #BDE0FE 95%, #0000 100%)',
                                scaleY: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
                            }}
                        />
                    </div>
                </div>
                {/* </div> */}
            </div>
        </section>
    );
};

export default RoadMap;
