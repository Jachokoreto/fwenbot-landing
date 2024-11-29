import type { MotionValue } from 'framer-motion';
import { motion, useTransform } from 'framer-motion';
import React from 'react';

type UpdateCardProps = {
    imageSrc: string;
    date: string;
    content: string;
    color: string;
    index: number;
    y: MotionValue<number>;
};

const UpdateCard: React.FC<UpdateCardProps> = ({
    imageSrc,
    date,
    content,
    color,
    index,
    y,
}) => {
    return (
        <motion.div
            className={`flex h-fit w-[90vw] flex-col rounded-2xl border-2 border-solid border-black p-6 shadow-cartoon md:w-[400px] ${color}`}
            style={{
                y: useTransform(y, [(3 + index) / 10, 0.7], [200, 0]),
            }}
        >
            <img
                loading="lazy"
                src={imageSrc}
                alt=""
                draggable={false}
                className="aspect-square w-full select-none rounded-2xl object-cover"
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
