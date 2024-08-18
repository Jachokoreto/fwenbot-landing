import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Community: React.FC = () => {
    return (
        <section className="container relative my-20 flex flex-col items-center justify-center overflow-hidden pb-2">
            <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/824b838f6ddb638d7227637257c1860771fd765129f679b107de404472148f4e?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
                alt={'alt'}
                width={462}
                height={574}
                className={`aspect-[0.81] w-[231px] max-w-full self-center object-contain`}
            />
            <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/824b838f6ddb638d7227637257c1860771fd765129f679b107de404472148f4e?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
                width={462}
                height={574}
                alt={'alt'}
                className={`absolute left-[10%] aspect-[0.81] w-[116px] max-w-full self-center object-contain`}
            />
            <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/824b838f6ddb638d7227637257c1860771fd765129f679b107de404472148f4e?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
                width={462}
                height={574}
                alt={'alt'}
                className={`absolute right-[10%] aspect-[0.81] w-[116px] max-w-full self-center object-contain`}
            />
            <h2 className="mt-10 text-center text-4xl font-bold">
                Join the community
            </h2>
            <p className="mt-5 max-w-xl text-center text-xl">
                Fwen Bot integration, with the thought of bringing traders
                together, leverages on communities built on discord and
                providing them with a place to call home.
            </p>
            <p className="mt-4 max-w-xl text-center text-xl">
                With Fwen Bot, we’re looking to build a strong community with
                good partnerships from different parts of the crypto industry.
            </p>
            <Button text="Join our Discord" primary className="mt-12" />
        </section>
    )
}

export default Community
