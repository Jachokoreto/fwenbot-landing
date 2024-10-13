import React, { useRef } from 'react'
import AddBotButton from './AddBotButton'
import HeroText from './HeroText'
import Button from '@/components/Button'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'

// const DelayText = ({ children }: { children: React.ReactNode }) => {
//     const ref = useRef<HTMLDivElement>(null)
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ['start end', 'center center'],
//     })
//     const y = useTransform(scrollYProgress, [0, 1], ['100vh', '0vh'])
//     return (
//         <motion.div ref={ref} style={{ y }}>
//             {children}
//         </motion.div>
//     )
// }

// Array of elements to animate
const elements = [
    { type: 'h1', content: 'As the saying goes,' },
    { type: 'h1', content: '"A friend in need' },
    { type: 'h1', content: 'is a friend indeed".' },
    {
        type: 'p',
        content:
            'Designed as a Discord Trading Bot, Fwen Bot provides the best support you need, whenever you need it.',
    },
]

const Intro = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>
}) => {
    // const scaleY = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
    // const y1 = useTransform(scrollYProgress, [0.2, 0.5], [500, 0])
    // const y2 = useTransform(scrollYProgress, [0.4, 0.7], [500, 0])
    // const y3 = useTransform(scrollYProgress, [0.4, 0.7], [500, 0])

    // Generate transforms programmatically for each element
    const transforms = elements.map((_, index) => {
        const start = (index + 1) / 10
        const end = Math.min(start + 0.3, 1)
        return useTransform(scrollYProgress, [start, end], [500, 0])
    })
    const exitY = useTransform(scrollYProgress, [0.8, 1], ["-50%", "-100%"])

    // const calculateY = (scrollYProgress: number, delay:number) => {
    //     if (scrollYProgress < delay) {
    //         return "100vh"
    //     } else {
    //         return sc
    //     }
    // }
    const imageScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [0, 1, 1, 0])
    const imageY = useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [-1000, 0, 0, 1000])
    // const imageRot = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

    return (
        <motion.div
            className="sticky top-1/2 mx-auto w-[90vw] overflow-hidden rounded-[40px] bg-yellow-400 p-4 max-md:py-24 md:px-16 md:py-28"
            // initial={{ y: 100, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ amount: 'all', once: true }}
            style={{ y: exitY }}
        >
            <div className="mb-0 flex w-full flex-col-reverse justify-between md:flex-row container mx-auto">
                <div className="flex flex-col gap-5 max-md:max-w-full">
                    {elements.map((element, index) => {
                        if (element.type === 'h1') {
                            return (
                                <motion.h1
                                    key={index}
                                    className="font-normal max-md:max-w-full"
                                    style={{ y: transforms[index] }}
                                >
                                    {element.content}
                                </motion.h1>
                            )
                        } else if (element.type === 'p') {
                            return (
                                <motion.p
                                    key={index}
                                    className="mt-10 text-xl max-md:max-w-full max-w-[480px]"
                                    style={{ y: transforms[index] }}
                                >
                                    {element.content}
                                </motion.p>
                            )
                        }
                        return null
                    })}
                    {/* <motion.div>
                        <Button
                            text="Add bot to server"
                            className="mr-auto mt-6"
                        />
                    </motion.div> */}
                </div>
                {/* <motion.img
                    loading="lazy"
                    src={
                        'https://cdn.builder.io/api/v1/image/assets/TEMP/824b838f6ddb638d7227637257c1860771fd765129f679b107de404472148f4e?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171'
                    }
                    alt={'description'}

                    // whileHover={{ scale: 1.1 }}
                /> */}
                <motion.video
                    autoPlay
                    muted
                    loop
                    className="mx-auto my-auto aspect-[0.81] w-[400px] max-w-full shrink-0 object-contain md:mx-0"
                    style={{ scale: imageScale, y: imageY }}
                >
                    <source src="/assets/Idle_1.webm" type="video/mp4" />
                </motion.video>
            </div>
        </motion.div>
    )
}

export default Intro
