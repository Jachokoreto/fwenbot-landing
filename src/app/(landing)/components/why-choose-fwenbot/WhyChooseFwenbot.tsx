import type { MotionValue } from 'framer-motion';
import { motion, useTransform } from 'framer-motion';
import React from 'react';

const WhyChooseFwenbot = ({ scrollYProgress, isMobile }: { scrollYProgress: MotionValue<number>; isMobile: boolean }) => {
    const ref = React.useRef(null);
    // const scrollYProgress = useSpringScroll({
    //     ref,
    //     offset: ['start end', 'end start'],
    // });
    const textOpacity = useTransform(scrollYProgress, [0.6, 0.65], [1, 0]);
    return (
        <motion.div
            className="mx-auto"
            style={{
                // y: useTransform(scrollYProgress, [0, 0.3], ["50vh", "0vh"]),
                opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
            }}
            ref={ref}
        >
            <h1>
                {/* Features to<br /> support your trading */}
                Why choose FwenBot?
            </h1>
            <motion.p
                className="mt-2"
                style={{
                    opacity: isMobile ? textOpacity : 1,
                }}
            >
                With the thought of our friends in mind, we want Fwen Bot to be
                as welcoming and intuitive as possible.
                {' '}
                <br />
                {' '}
                <br />
                Designed with a strong focus on user experience,
                ensuring that whether you&apos;re a seasoned trader or new to
                the crypto space, Fwen Bot will always be your number one
                choice.
            </motion.p>
        </motion.div>
    );
};

export default WhyChooseFwenbot;
