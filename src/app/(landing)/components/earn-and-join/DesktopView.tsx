import Button from '@/components/Button'
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useResizeObserver } from 'usehooks-ts'

const earnWithFwenBot = [
    'Through our shilling and referral programs, you have the opportunities to earn while you trade and share your insights.',
    'Rewards for promoting successful trades within your community.',
    'Rewards for inviting others to experience the benefits of Fwen Bot',
]

const DesktopView = () => {
    const desktopRef = useRef<HTMLDivElement | null>(null)
    const videoRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: desktopRef,
        offset: ['start start', 'end end'],
    })
    const { width = 0, height = 0 } = useResizeObserver({
        ref: desktopRef,
        box: 'content-box',
    })

    const [videoX, setVideoX] = useState(0)
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (latest > 0.65) setIsButtonDisabled(false)
        else setIsButtonDisabled(true)
    })

    const earnX = useTransform(scrollYProgress, [0.3, 0.45], ['0%', '40%'])
    const earnOpacity = useTransform(scrollYProgress, [0.3, 0.45], [1, 0])
    const joinX = useTransform(scrollYProgress, [0.55, 0.67], ['60%', '100%'])
    const joinOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1])

    useEffect(() => {
        if (videoRef && videoRef.current && width) {
            const resizeObserver = new ResizeObserver((entries) => {
                if (entries[0]) {
                    setVideoX(width - entries[0].contentRect.width)
                }
            })
            resizeObserver.observe(videoRef.current)
            return () => {
                resizeObserver.disconnect()
            }
        }
    }, [width, videoRef])

    return (
        <div className="container h-[200vh] w-full" ref={desktopRef}>
            <div className="sticky top-0 flex h-[100vh] w-full items-center">
                <motion.div
                    className="absolute flex w-[50%] flex-col space-y-5"
                    style={{ x: earnX, opacity: earnOpacity }}
                >
                    <h1>Earning with FwenBot</h1>
                    <p className="text-2xl">
                        At Fwen Bot, we believe in rewarding our users for their
                        active participation and contributions.
                    </p>
                    <div className="flex w-full flex-col space-y-4">
                        {earnWithFwenBot.map((earn: string, index: number) => {
                            return (
                                <div
                                    className="bg-accent flex flex-1 rounded-xl px-10 py-8"
                                    key={index}
                                >
                                    <p className="text-lg">{earn}</p>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>

                <motion.div
                    className="absolute flex w-[50%] flex-col"
                    style={{ x: joinX, opacity: joinOpacity }}
                >
                    <h1>Join the community</h1>
                    <p className="mt-5 max-w-xl text-2xl">
                        Fwen Bot integration, with the thought of bringing
                        traders together, leverages on communities built on
                        discord and providing them with a place to call home.
                    </p>
                    <p className="mt-4 max-w-xl text-2xl">
                        With Fwen Bot, we're looking to build a strong community
                        with good partnerships from different parts of the
                        crypto industry.
                    </p>
                    <Button
                        text="Join our Discord"
                        primary
                        className="mt-12 w-fit px-5"
                        style={{
                            cursor: isButtonDisabled ? 'default' : 'pointer',
                        }}
                        disabled={isButtonDisabled}
                    />
                </motion.div>

                <motion.div
                    className="bg-primary absolute aspect-square w-[40%] rounded-3xl border-4 border-black"
                    ref={videoRef}
                    style={{
                        x: useTransform(
                            scrollYProgress,
                            [0.3, 0.7],
                            [videoX, 0]
                        ),
                    }}
                >
                    <motion.video
                        autoPlay
                        muted
                        loop
                        preload="metadata"
                        className="absolute h-full w-full"
                        style={{ opacity: earnOpacity }}
                    >
                        <source src="/assets/shiller.webm" type="video/mp4" />
                        <source
                            src="/assets/shiller.mov"
                            type="video/quicktime"
                        />
                    </motion.video>
                    <motion.video
                        autoPlay
                        muted
                        loop
                        preload="metadata"
                        className="absolute h-full w-full"
                        style={{ opacity: joinOpacity }}
                    >
                        <source src="/assets/shiller.webm" type="video/mp4" />
                        <source
                            src="/assets/shiller.mov"
                            type="video/quicktime"
                        />
                    </motion.video>
                </motion.div>
            </div>
        </div>
    )
}

export default DesktopView