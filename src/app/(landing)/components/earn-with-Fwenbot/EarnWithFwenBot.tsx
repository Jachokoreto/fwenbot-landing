'use client'
import React from 'react'
import { TbMoneybag } from 'react-icons/tb'
import Lottie from 'lottie-react'
import shillerAnimation from '@/lottie/shiller2.json'

const EarnWithFwenBot = () => {
    return (
        <section className="container my-20 overflow-hidden rounded-[40px] border-2 border-cyan-200 bg-cyan-200/20 p-10 flex flex-col md:flex-row justify-center gap-8">
            <div>
                <h1 className="ml-2.5 self-start max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    {/* Features to<br /> support your trading */}
                    Earning with Fwen Bot
                </h1>
                <p className="ml-2.5 mt-6 max-w-lg text-xl">
                    At Fwen Bot, we believe in rewarding our users for their
                    active participation and contributions.
                </p>

                <ul className="ml-2.5 mt-10 space-y-4">
                    <li className="flex">
                        <TbMoneybag className="mr-2 mt-1 size-6" />
                        <p className="max-w-md">
                            Through our shilling and referral programs, you have
                            the opportunities to earn while you trade and share
                            your insights.
                        </p>
                    </li>
                    <li className="flex">
                        <TbMoneybag className="mr-2 mt-1 size-6" />
                        <p className="max-w-md">
                            Rewards for promoting successful trades within your
                            community
                        </p>
                    </li>
                    <li className="flex">
                        <TbMoneybag className="mr-2 mt-1 size-6" />
                        <p className="max-w-md">
                            Rewards for inviting others to experience the
                            benefits of Fwen Bot
                        </p>
                    </li>
                </ul>
            </div>
            <Lottie animationData={shillerAnimation} className="max-w-80 w-full" />
        </section>
    )
}

export default EarnWithFwenBot
