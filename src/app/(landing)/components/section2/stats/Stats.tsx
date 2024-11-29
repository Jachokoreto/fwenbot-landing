import type {
    MotionValue,
} from 'framer-motion';
import {
    motion,
    useTransform,
} from 'framer-motion';
import React, { useRef } from 'react';

const StatItem = ({
    title,
    value,
    scrollYProgress,
    index,
}: {
    title: string;
    value: string;
    scrollYProgress: MotionValue<number>;
    index: number;
}) => {
    const y = useTransform(
        scrollYProgress,
        [index / 10 + 0.2, Math.min((index) / 10 + 0.3 + 0.2, 0.75)],
        ['100vh', '0vh'],
    );
    // const opacity

    return (
        <motion.div
            className="flex h-full flex-col justify-between rounded-[24px] border-4 border-black bg-[#fef3a1] px-4 py-3 shadow-cartoon md:p-6"
            style={{ y }}
            // initial={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
        >
            <p className="w-full text-xl md:text-4xl">{title}</p>
            <h3 className="ml-auto text-[4vh] font-normal md:text-[6vh]">
                {value}
                <span className="opacity-50">+</span>
            </h3>
        </motion.div>
    );
};

const statVals = [
    { title: 'Total Trade Volume', value: '100' },
    { title: 'Total Users', value: '1.2K' },
    { title: 'Lifetime Volume', value: '$88B' },
    { title: 'Total Trade', value: '100' },
];

const Stats = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) => {
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref}
            className="container mx-auto flex h-fit flex-col max-sm:px-6 md:h-3/5"
        >
            <div className="max-w-full-xl my-10 grid size-full auto-rows-fr grid-cols-1 items-stretch justify-around gap-6 md:grid-cols-2 md:gap-8">
                {statVals.map((stat, index) => (
                    <StatItem
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        index={index}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default Stats;
