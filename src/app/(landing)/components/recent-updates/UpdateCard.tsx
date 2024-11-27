import { motion } from 'framer-motion';
import React from 'react';

type UpdateCardProps = {
    imageSrc: string;
    date: string;
    content: string;
    style: any;
    color: string;
};

const UpdateCard: React.FC<UpdateCardProps> = ({
    imageSrc,
    date,
    content,
    style,
    color,
}) => {
    return (
        <motion.div className={`flex w-[90vw] flex-col rounded-2xl border-2 border-solid border-black p-6 shadow-cartoon md:w-[400px] ${color}`} style={style}>
            <img
                loading="lazy"
                src={imageSrc}
                alt=""
                draggable={false}
                className="h-full w-full select-none rounded-2xl object-cover"
            />
            <time
                dateTime={date}
                className="mt-4 self-start text-right text-xs text-zinc-600"
            >
                {date}
            </time>
            <p className="mt-3.5 text-black md:text-xl">{content}</p>
        </motion.div>
    );
};

export default UpdateCard;
