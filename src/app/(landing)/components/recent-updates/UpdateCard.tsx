import React from 'react'

interface UpdateCardProps {
    imageSrc: string
    date: string
    content: string
    isLastCard: boolean
}

const UpdateCard: React.FC<UpdateCardProps> = ({
    imageSrc,
    date,
    content,
    isLastCard,
}) => {
    const cardClasses = `flex flex-col self-stretch px-6 py-6 my-auto bg-white rounded-2xl border border-black border-solid min-w-[240px] shadow-[2px_2px_0px_rgba(0,0,0,1)] min-w-[348px] max-md:px-5 ${
        isLastCard ? 'items-start' : ''
    }`

    const imageClasses = `object-contain w-full rounded-2xl ${
        isLastCard ? 'max-w-full aspect-[0.6] w-[137px]' : 'aspect-[1.3]'
    }`

    const contentClasses = `mt-3.5 text-xl text-black ${
        isLastCard ? 'w-[298px]' : 'max-md:mr-0.5'
    }`

    return (
        <article className={cardClasses}>
            <img
                loading="lazy"
                src={imageSrc}
                alt=""
                className={imageClasses}
            />
            <time
                dateTime={date}
                className="mt-4 self-start text-right text-xs text-zinc-600"
            >
                {date}
            </time>
            <p className={contentClasses}>{content}</p>
        </article>
    )
}

export default UpdateCard
