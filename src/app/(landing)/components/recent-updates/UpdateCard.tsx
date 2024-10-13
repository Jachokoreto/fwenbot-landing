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

    return (
        <article className={`flex flex-col px-6 py-6 my-auto bg-yellow-100 rounded-2xl border border-black border-solid w-full max-w-[300px] h-fit shadow-[2px_2px_0px_rgba(0,0,0,1)] max-md:px-5`}>
            <img
                loading="lazy"
                src={imageSrc}
                alt=""
                className={`bject-contain w-full aspect-square rounded-2xl select-none`}
            />
            <time
                dateTime={date}
                className="mt-4 self-start text-right text-xs text-zinc-600"
            >
                {date}
            </time>
            <p className={`mt-3.5 text-xl text-black`}>{content}</p>
        </article>
    )
}

export default UpdateCard
