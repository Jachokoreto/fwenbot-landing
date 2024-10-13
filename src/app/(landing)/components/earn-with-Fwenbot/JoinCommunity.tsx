import Button from '@/components/Button'
import Link from 'next/link'

const JoinCommunity = () => {
    return (
        <div className="flex w-full flex-col lg:flex-1">
            <p>Join the community</p>
            <p>
                Fwen Bot integration, with the thought of bringing traders
                together, leverages on communities built on discord and
                providing them with a place to call home.
            </p>
            <p>
                With Fwen Bot, we're looking to build a strong community with
                good partnerships from different parts of the crypto industry.
            </p>
            <Link href="https://discord.gg/rYzN89rG3G">
                <Button text="Join our Discord" primary className="mt-12" />
            </Link>
        </div>
    )
}

export default JoinCommunity
