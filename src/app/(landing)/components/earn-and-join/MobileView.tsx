import Button from '@/components/Button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const earnWithFwenBot = [
    'Through our shilling and referral programs, you have the opportunities to earn while you trade and share your insights.',
    'Rewards for promoting successful trades within your community.',
    'Rewards for inviting others to experience the benefits of Fwen Bot',
]

const MobileView = () => {
    const videoRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: videoRef,
        offset: ['end end', 'start start'],
    })

    const firstVid = useTransform(scrollYProgress, [0.2, 0.51], [1, 0])
    const seconVid = useTransform(scrollYProgress, [0.49, 0.8], [0, 1])

    return (
        <div className="container flex h-full w-full flex-col items-center space-y-8 py-32">
            <div className="flex w-full flex-col space-y-5">
                <h1>Earning with FwenBot</h1>
                <p className="text-2xl">
                    At Fwen Bot, we believe in rewarding our users for their
                    active participation and contributions.
                </p>
                <div className="flex w-full flex-col space-y-4">
                    {earnWithFwenBot.map((earn: string, index: number) => {
                        return (
                            <div
                                className="bg-accent flex flex-1 rounded-xl px-8 py-4"
                                key={index}
                            >
                                <p className="text-lg">{earn}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div
                className="bg-primary relative aspect-square w-full max-w-[400px] rounded-3xl border-4 border-black"
                ref={videoRef}
            >
                <motion.video
                    autoPlay
                    muted
                    loop
                    preload="metadata"
                    className="absolute h-full w-full"
                    style={{ opacity: firstVid }}
                >
                    <source src="/assets/shiller.webm" type="video/mp4" />
                    <source src="/assets/shiller.mov" type="video/quicktime" />
                </motion.video>
                <motion.video
                    autoPlay
                    muted
                    loop
                    preload="metadata"
                    className="absolute h-full w-full"
                    style={{ opacity: seconVid }}
                >
                    <source src="/assets/shiller.webm" type="video/mp4" />
                    <source src="/assets/shiller.mov" type="video/quicktime" />
                </motion.video>
            </div>

            <div className="flex w-full flex-col">
                <h1>Join the community</h1>
                <p className="mt-5 max-w-xl text-2xl">
                    Fwen Bot integration, with the thought of bringing traders
                    together, leverages on communities built on discord and
                    providing them with a place to call home.
                </p>
                <p className="mt-4 max-w-xl text-2xl">
                    With Fwen Bot, we're looking to build a strong community
                    with good partnerships from different parts of the crypto
                    industry.
                </p>
                <Button
                    text="Join our Discord"
                    primary
                    className="mt-12 w-fit px-5"
                />
            </div>
        </div>
    )
}

export default MobileView
