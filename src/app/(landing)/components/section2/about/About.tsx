import type { MotionValue } from 'framer-motion';
import { motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

// Array of elements to animate
const elements = [
    { type: 'svg', content: '/assets/As-the-saying-goes.svg' },
    { type: 'svg', content: '/assets/A-friend-in-need.svg' },
    { type: 'svg', content: '/assets/is-a-friend-indeed.svg' },
    {
        type: 'p',
        content:
            'Designed as a Discord Trading Bot, Fwen Bot provides the best support you need, whenever you need it.',
    },
];



const TextElement = ({ element, index, scrollYProgress }: { element: any, index: number, scrollYProgress: MotionValue<number> }) => {
    const start = (index + 1) / 10;
    const end = Math.min(start + 0.2, 1);
    const y = useTransform(scrollYProgress, [start, end], [500, 0]);

    return (
        <motion.p
            className="mt-2 w-full max-w-[480px] text-xl md:mt-5"
            style={{ y }}
        >
            {element.content}
        </motion.p>
    )
}

// refactor the svg element component
const SvgElement = ({ element, index, scrollYProgress }: { element: any, index: number, scrollYProgress: MotionValue<number> }) => {
    const start = (index + 1) / 10;
    const end = Math.min(start + 0.2, 1);
    const y = useTransform(scrollYProgress, [start, end], [500, 0]);

    return (
        <motion.div
            style={{ y }}
        >
            <img src={element.content} alt={`SVG ${index + 1}`} width="100%" height="auto" />
        </motion.div>
    );
}

const About = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) => {
    // Generate transforms programmatically for each element

    const imageScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [0, 1, 1, 0]);
    const imageY = useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [-1000, 0, 0, 1000]);

    const containerRef = useRef<HTMLDivElement>(null);


    return (
        <motion.div
            className="container sticky top-1/2 mx-auto h-[90vh] min-h-fit w-[90vw] overflow-hidden rounded-[40px] bg-yellow-400"
            style={{
                y: useTransform(scrollYProgress, [0, 0.2], ['-45%', '-50%']),
                scale: useTransform(scrollYProgress, [0.9, 1], [1, 0.5]),
            }}
            id="about"
        >
            <div className="mx-auto mb-0 flex size-full flex-col-reverse justify-center gap-2 p-8 md:flex-row md:gap-10">
                <div className="flex w-full flex-1 flex-col justify-center gap-5 md:w-auto md:max-w-[50%] overflow-hidden" ref={containerRef}>
                    {elements.map((element, index) => {
                        if (element.type === 'svg') {
                            return (
                                <SvgElement scrollYProgress={scrollYProgress} key={element.type} element={element} index={index} />
                            );
                        } else if (element.type === 'p') {
                            return (
                                <TextElement scrollYProgress={scrollYProgress} key={element.type} element={element} index={index} />
                            );
                        }
                        return null;
                    })}
                </div>
                <motion.div
                    className="mx-auto flex h-1/3 w-full shrink-0 items-center justify-center object-contain md:h-full md:w-auto md:max-w-[50%]"
                    style={{ scale: imageScale, y: imageY }}
                >
                    <img src="/assets/FwenBot-about-us.gif" alt="friends" className='' />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
