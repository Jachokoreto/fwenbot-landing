'use client'

import React from 'react'
import Lottie from 'lottie-react'
import shillerAnimation from '@/lottie/shiller2.json'
import Description from './Description'
import JoinCommunity from './JoinCommunity'
import { motion, useScroll } from 'framer-motion'

const EarnWithFwenBot = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end'],
    })
    return (
        <section className="h-[400vh] w-screen bg-[#BDE0FE]/50 " ref={ref}>
            <div className="container flex h-screen flex-col-reverse space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0  sticky top-0  py-20">
                <div className='w-full md:w-1/3 relative h-full'>
                    <Description scrollYProgress={scrollYProgress} />
                    <JoinCommunity scrollYProgress={scrollYProgress} />
                </div>
                <div className="h-full w-full rounded-2xl lg:flex-1">
                    <motion.video
                        autoPlay
                        muted
                        loop
                        className="w-full"
                    >
                        <source src="/assets/shiller_1.webm" type="video/mp4" />
                    </motion.video>
                </div>
            </div>
        </section>
    )
    // return (
    //     <section className="container mx-auto my-20 flex flex-col-reverse justify-around items-center gap-8 overflow-hidden rounded-[40px] border-2 border-cyan-200 bg-cyan-200/20 md:flex-row h-[90vh]">
    //         <div className="">
    //             <h1 className="self-start max-md:max-w-full max-md:text-4xl max-md:leading-10">
    //                 {/* Features to<br /> support your trading */}
    //                 Earning with Fwen Bot
    //             </h1>
    //             <p className="mt-6 max-w-lg text-xl">
    //                 At Fwen Bot, we believe in rewarding our users for their
    //                 active participation and contributions.
    //             </p>
    //             <ul className="mt-10 space-y-4">
    //                 <li className="flex">
    //                     <TbMoneybag className="mr-2 mt-1 size-6" />
    //                     <p className="max-w-md">
    //                         Through our shilling and referral programs, you have
    //                         the opportunities to earn while you trade and share
    //                         your insights.
    //                     </p>
    //                 </li>
    //                 <li className="flex">
    //                     <TbMoneybag className="mr-2 mt-1 size-6" />
    //                     <p className="max-w-md">
    //                         Rewards for promoting successful trades within your
    //                         community
    //                     </p>
    //                 </li>
    //                 <li className="flex">
    //                     <TbMoneybag className="mr-2 mt-1 size-6" />
    //                     <p className="max-w-md">
    //                         Rewards for inviting others to experience the
    //                         benefits of Fwen Bot
    //                     </p>
    //                 </li>
    //             </ul>
    //             <h2 className="mt-10 text-4xl font-semibold">
    //                 Join the community
    //             </h2>
    //             <p className="mt-5 max-w-xl text-xl">
    //                 Fwen Bot integration, with the thought of bringing traders
    //                 together, leverages on communities built on discord and
    //                 providing them with a place to call home.
    //             </p>
    //             <p className="mt-4 max-w-xl text-xl">
    //                 With Fwen Bot, we’re looking to build a strong community
    //                 with good partnerships from different parts of the crypto
    //                 industry.
    //             </p>
    //             <Link href="https://discord.gg/rYzN89rG3G">
    //                 <Button text="Join our Discord" primary className="mt-12" />
    //             </Link>
    //         </div>
    //         <Lottie
    //             animationData={shillerAnimation}
    //             className="w-full md:w-1/2"
    //         />
    //     </section>
    // )
}

export default EarnWithFwenBot
