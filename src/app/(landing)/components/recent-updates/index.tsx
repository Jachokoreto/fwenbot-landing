import { motion, useSpring, useTransform } from 'framer-motion';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useResizeObserver } from 'usehooks-ts';

import useSpringScroll from '@/hooks/useSpringScroll';

import UpdateCard from './UpdateCard';

type Update = {
    imageSrc: string;
    date: string;
    content: string;
};

const updates: Update[] = [
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/1584004785080b507633a97556f9847b3d57f1e98d32729755868da1a981249d?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        date: '10th March 2024',
        content: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/1584004785080b507633a97556f9847b3d57f1e98d32729755868da1a981249d?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        date: '10th March 2024',
        content: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/1584004785080b507633a97556f9847b3d57f1e98d32729755868da1a981249d?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        date: '10th March 2024',
        content: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/d8db22d586b3afa51ea7199a037756e46fb012723225c71b54171f0a3c77a8ae?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        date: '10th March 2024',
        content: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor',
    },
];

const colors = ['bg-accent', 'bg-contrast', 'bg-tertiary'];

const RecentUpdates: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const boxRef = React.useRef<HTMLDivElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const x = useSpring(0);

    const { width = 0 } = useResizeObserver({
        ref,
        box: 'border-box',
    });
    const { width: boxWidth = 0 } = useResizeObserver({
        ref: boxRef,
        box: 'content-box',
    });

    const y = useSpringScroll({
        ref: containerRef,
        offset: ['start end', 'end end'],
    });

    const handleButtonClick = (dir: 'left' | 'right') => {
        const currX = x.get();
        if (dir === 'left' && currX <= 0) {
            x.set(x.get() + 100);
        } else if (dir === 'right' && currX > -(width - boxWidth)) {
            x.set(x.get() - 100);
        }
    };

    return (
        <motion.div ref={containerRef} className="h-[200vh]">
            <section className="container sticky top-0 mx-auto flex h-screen flex-col justify-center overflow-hidden py-6" ref={boxRef}>
                <motion.h1
                    id="recent-updates"
                    style={{
                        y: useTransform(y, [0, 0.3], [200, 0]),
                    }}
                >
                    Recent Updates
                </motion.h1>
                <motion.p
                    className="mt-4"
                    style={{
                        y: useTransform(y, [0.1, 0.3], [200, 0]),
                    }}
                >
                    Check out some of our major updates and collaboration posts on
                    Twitter.
                </motion.p>
                <motion.div
                    ref={ref}
                    className="no-scrollbar relative z-10 mt-4 flex size-fit cursor-grab gap-6 p-2 md:mt-8"
                    drag="x"
                    style={{ x }}
                    dragConstraints={{
                        left: -(width - (boxWidth)),
                        right: 0,
                    }}
                >
                    {updates.map((update, index) => (
                        <UpdateCard
                            key={index}
                            imageSrc={update.imageSrc}
                            date={update.date}
                            content={update.content}
                            color={colors[index % 3]}
                            index={index}
                            y={y}

                        />
                    ))}
                </motion.div>
                {/* </div> */}
                <motion.div
                    className="mx-auto mt-8 flex gap-10"
                    style={{
                        opacity: useTransform(y, [0.7, 0.75], [0, 1]),
                    }}
                >
                    <motion.button
                        className="flex size-16 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold"
                        onClick={() => handleButtonClick('left')}
                    >
                        <FaChevronLeft />
                    </motion.button>
                    <motion.button
                        className="flex size-16 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold"
                        onClick={() => handleButtonClick('right')}
                    >
                        <FaChevronRight />
                    </motion.button>
                </motion.div>
            </section>
        </motion.div>

    );
};

export default RecentUpdates;
