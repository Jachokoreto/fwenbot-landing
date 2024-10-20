import {
    motion,
    AnimatePresence,
    MotionValue,
    useTransform,
} from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'

const containerVariants = {
    hidden: {
        opacity: 1,
        transition: {
            when: 'afterChildren',
            staggerChildren: 0.1,
            delay: 1,
        },
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4 } },
}

interface PhaseProps {
    phase: any
    scrollY: MotionValue<number>
    index: number
    selectedPhase: number
    setSelectedPhase: Dispatch<SetStateAction<number>>
}

const Phase = ({
    phase,
    scrollY,
    index,
    selectedPhase,
    setSelectedPhase,
}: PhaseProps) => {
    const y = useTransform(scrollY, phase.step, [200, 0])
    const opacity = useTransform(scrollY, phase.step, [0, 1])

    return (
        <motion.div
            className="flex w-full items-center"
            style={{ y, opacity }}
            onClick={() => setSelectedPhase(index)}
        >
            <div
                className="relative flex min-w-[90%] flex-col rounded-2xl bg-orange-400 px-4 py-6 sm:min-w-[80%] md:min-w-[500px] lg:w-full lg:min-w-0"
                style={{ background: phase.bg }}
            >
                <p className="w-fit rounded-full bg-white/50 px-3 py-1 text-base sm:text-lg md:text-xl">
                    Phase {index + 1} - {phase.title}
                </p>
                <AnimatePresence>
                    {index === selectedPhase && (
                        <motion.div
                            key={`phase ${index + 1}`}
                            className="mt-3 flex w-full flex-col overflow-hidden"
                            initial={{ height: 0 }}
                            animate={{
                                height: 'auto',
                                transition: { delay: 0.3, duration: 0.3 },
                            }}
                            exit={{
                                height: 0,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <motion.ol
                                className="w-full list-disc space-y-3 pl-5 font-normal"
                                variants={containerVariants}
                            >
                                {phase.items.map(
                                    (item: string, index: number) => (
                                        <motion.li
                                            key={index}
                                            variants={itemVariants}
                                            className="font-vt323 text-lg"
                                        >
                                            <p>{item}</p>
                                        </motion.li>
                                    )
                                )}
                            </motion.ol>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="relative -mr-[2px] w-full lg:w-16 xl:w-20">
                <div className="h-1 w-full" style={{ background: phase.bg }} />
                <div
                    className="absolute right-0 top-1/2 size-3 -translate-y-1/2"
                    style={{ background: phase.bg }}
                />
            </div>
        </motion.div>
    )
}

export default Phase
