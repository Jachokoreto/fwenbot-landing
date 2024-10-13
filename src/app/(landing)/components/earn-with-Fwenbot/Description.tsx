import { TbMoneybag } from 'react-icons/tb'
import { MotionValue, motion, useTransform } from 'framer-motion'

const Description = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    return (
        <motion.div className="flex w-full flex-col lg:flex-1 absolute top-1/2"
            style={{
                opacity: useTransform(scrollYProgress, [0.2, 0.25, 0.55, 0.6], [0, 1, 1, 0]),
                y: useTransform(scrollYProgress, [0.2, 0.25, 0.55, 0.6], ["200%", "-50%", "-50%", "-100%"]),
            }}
        >
            <h1>
                Earning with FwenBot
            </h1>
            <p className="text-2xl leading-relaxed tracking-wide mt-8">
                At Fwen Bot, we believe in rewarding our users for their active
                participation and contributions.
            </p>
            <ol className="w-full space-y-4 font-normal mt-8">
                {[
                    'Through our shilling and referral programs, you have the opportunities to earn while you trade and share your insights.',
                    'Rewards for promoting successful trades within your community.',
                    'Rewards for inviting others to experience the benefits of Fwen Bot',
                ].map((list, index) => (
                    <motion.li key={index} className="flex"
                        style={{
                            x: useTransform(scrollYProgress, [0.3 + index * 0.05, 0.4 + index * 0.05], ["100%", "0%"]),
                            opacity: useTransform(scrollYProgress, [0.3 + index * 0.05, 0.4 + index * 0.05], [0, 1]),
                        }}
                    >
                        <TbMoneybag className="mr-2 mt-1 h-6 min-h-6 w-6 min-w-6" />
                        <p>{list}</p>
                    </motion.li>
                ))}
            </ol>
        </motion.div>
    )
}

export default Description
