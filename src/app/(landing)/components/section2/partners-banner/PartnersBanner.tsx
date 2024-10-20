import * as React from 'react'
import { motion, MotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useResizeObserver } from 'usehooks-ts'


const images = [
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b9840c2b72d15415f33d13382ea6d0f1680bebb3381d9d06a4737774dceea29?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        alt: 'Description of image 1',
    },
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d58a740929f80abdde37c4e66f75218a6b57c16dbc57f54b345422f00b8ea0bc?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        alt: 'Description of image 2',
    },
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/96c460f5814e5abee445e108cce84dcfcfdf62758c2dc61591700a07ee30b5c4?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        alt: 'Description of image 3',
    },
]
interface PartnersBannerProps {
    scrollYProgress: MotionValue<number>
}

const PartnersBanner: React.FC<PartnersBannerProps> = ({ scrollYProgress }) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const childRef = React.useRef(null)
    const { width = 0 } = useResizeObserver({
        ref: childRef,
        box: 'border-box',
    })
    const { width: containerW = 0 } = useResizeObserver({
        ref: ref,
        box: 'content-box',
    })
    const [offset, setOffset] = React.useState(0)

    React.useEffect(() => {

        console.log({ width, containerW })
        if (ref.current) {
            if (width < containerW) {
                setOffset(0)
            } else
                setOffset(-(width - containerW))
        }
    }, [ref, width])

    // return (
    //     <div className='w-full h-full bg-red-500'></div>
    // )
    return (
        <div className="container mx-auto my-3 flex w-full flex-col h-full overflow-hidden" ref={ref}>
            <motion.div className="lg:my-10 flex w-fit gap-10 " ref={childRef}>
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="relative aspect-[3.69] min-w-[50vw] md:min-w-[25vw] flex-1 object-contain"
                        style={{
                            y: useTransform(
                                scrollYProgress,
                                [(index + 1) / 10, Math.min((index + 1) / 10 + 0.4, 1)],
                                ["100vh", "0vh"]
                            ),
                            x: useTransform(
                                scrollYProgress,
                                [(images.length) / 10 + 0.4, Math.min((images.length) / 10 + 0.4 + 0.2, 1)],
                                [0, offset]
                            ),
                        }}
                    >
                        <Image
                            loading="lazy"
                            src={image.src}
                            alt={image.alt}
                            fill
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default PartnersBanner
