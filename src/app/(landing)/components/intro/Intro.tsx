import React from 'react'
import AddBotButton from './AddBotButton'
import HeroText from './HeroText'
import Button from '@/components/Button'
import { motion } from 'framer-motion'

const Intro = () => {
    return (
        <motion.section
            className="-mt-7 flex w-full flex-col items-center justify-center overflow-hidden rounded-[40px] bg-yellow-400 p-4 max-md:max-w-full max-md:px-5 max-md:py-24 md:px-16 md:py-28"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 'all', once: true }}
        >
            <div className="mb-0 flex w-full max-w-[1015px] flex-col-reverse justify-between gap-5 max-md:mb-2.5 max-md:max-w-full md:flex-row">
                <div className="flex max-w-[480px] flex-col max-md:max-w-full">
                    <HeroText />
                    <Button text="Add bot to server" className="mr-auto mt-6" />
                </div>
                <img
                    loading="lazy"
                    src={
                        'https://cdn.builder.io/api/v1/image/assets/TEMP/824b838f6ddb638d7227637257c1860771fd765129f679b107de404472148f4e?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171'
                    }
                    alt={'description'}
                    className="mx-auto my-auto aspect-[0.81] w-[231px] max-w-full shrink-0 object-contain md:mx-0"
                />
            </div>
        </motion.section>
    )
}

export default Intro
