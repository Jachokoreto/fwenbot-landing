import { motion, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

import Button from '@/components/Button';
import useSpringScroll from '@/hooks/useSpringScroll';

const earnWithFwenBot = [
    'Through our shilling and referral programs, you have the opportunities to earn while you trade and share your insights.',
    'Rewards for promoting successful trades within your community.',
    'Rewards for inviting others to experience the benefits of Fwen Bot',
];

const MobileView = () => {
    const videoRef = useRef<HTMLDivElement | null>(null);
    const scrollYProgress = useSpringScroll({
        ref: videoRef,
        offset: ['start end', 'end end'],
    })
    // const firstVid = useTransform(scrollYProgress, [0.2, 0.51], [1, 0])
    // const seconVid = useTransform(scrollYProgress, [0.49, 0.8], [0, 1])

    return (
        <div className="container flex size-full flex-col items-center space-y-8 py-32 relative" ref={videoRef}>
            <motion.div className=' absolute h-full w-screen top-0 -z-10 ' style={{ background: useTransform(scrollYProgress, [0, 0.3], ['#f5f2e520', '#f5f2e5']), borderRadius: useTransform(scrollYProgress, [0.1, 0.3, 0.95, 1], ['999px', '0px', '0px', '999px']) }} />
            <div
                className="relative aspect-square w-full max-w-[400px] rounded-3xl border-4 border-black bg-primary"
            >
                <motion.div
                    className="absolute size-full"
                // style={{ opacity: firstVid }}
                >
                    {/* <AutoplayVideo>
                        <source src="/assets/shiller.webm" type="video/mp4" />
                        <source src="/assets/shiller.mov" type="video/quicktime" />
                    </AutoplayVideo> */}
                    <img src="/assets/FwenBot-earning-with-us.gif" alt="friends" />

                </motion.div>

            </div>
            <div className="container mx-auto flex w-full flex-col space-y-5">
                <h1>Earning with FwenBot</h1>
                <p className="text-2xl">
                    At Fwen Bot, we believe in rewarding our users for their
                    active participation and contributions.
                </p>
                <div className="flex w-full flex-col space-y-4">
                    {earnWithFwenBot.map((earn: string, index: number) => {
                        return (
                            <div
                                className="flex flex-1 rounded-xl bg-accent px-8 py-4"
                                key={index}
                            >
                                <p className="text-lg">{earn}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div
                className="relative aspect-square w-full max-w-[400px] rounded-3xl border-4 border-black bg-primary"
            >
                <motion.div
                    className="absolute size-full"
                // style={{ opacity: seconVid }}
                >
                    {/* <AutoplayVideo>
                        <source src="/assets/shiller.webm" type="video/mp4" />
                        <source src="/assets/shiller.mov" type="video/quicktime" />
                    </AutoplayVideo> */}
                    <img src="/assets/FwenBot-join-us.gif" alt="friends" />

                </motion.div>
            </div>

            <div className="container mx-auto flex w-full flex-col">
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
                <Link href="https://discord.gg/rYzN89rG3G">
                    <Button
                        text="Join our Discord"
                        primary
                        className="mt-12 w-fit px-5"
                    />
                </Link>
            </div>
        </div>
    );
};

export default MobileView;
