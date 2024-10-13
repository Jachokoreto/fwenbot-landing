import Button from '@/components/Button'
import Link from 'next/link'
import { MotionValue, motion, useTransform } from 'framer-motion'

const JoinCommunity = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    return (
        <motion.div className="flex w-full flex-col lg:flex-1 absolute top-1/2"
            style={{
                opacity: useTransform(scrollYProgress, [0.6, 0.65, 0.85, 0.9], [0, 1, 1, 0]),
                y: useTransform(scrollYProgress, [0.6, 0.65, 0.85, 0.9], ["100%", "-50%", "-50%", "-100%"]),
            }}>
            <h1>Join the community</h1>
            <p className='mt-8'>
                Fwen Bot integration, with the thought of bringing traders
                together, leverages on communities built on discord and
                providing them with a place to call home.
            </p>
            <p className='mt-4'>
                With Fwen Bot, we're looking to build a strong community with
                good partnerships from different parts of the crypto industry.
            </p>
            <Link href="https://discord.gg/rYzN89rG3G">
                <Button text="Join our Discord" primary className="mt-12" />
            </Link>
        </motion.div>
    )
}

export default JoinCommunity
