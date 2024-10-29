import React from 'react'
import { motion } from 'framer-motion'

interface UpdateCardProps {
    imageSrc: string
    date: string
    content: string
    style: any
    color: string
}



const UpdateCard: React.FC<UpdateCardProps> = ({
    imageSrc,
    date,
    content,
    style,
    color
}) => {

    return (
        <motion.div className={`flex flex-col p-6 rounded-2xl border-2 border-black border-solid w-[400px] shadow-cartoon ${color}`} style={style}>
            <img
                loading="lazy"
                src={imageSrc}
                alt=""
                draggable={false}
                className={`object-cover w-full aspect-square rounded-2xl select-none`}
            />
            <time
                dateTime={date}
                className="mt-4 self-start text-right text-xs text-zinc-600"
            >
                {date}
            </time>
            <p className={`mt-3.5 text-xl text-black`}>{content}</p>
        </motion.div>
    )
}

export default UpdateCard
