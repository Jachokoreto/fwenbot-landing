import { useSpring, useScroll, SpringOptions, spring } from 'framer-motion';
import { ScrollOffset } from '@/types/scroll-offset';

const useSpringScroll = ({ ref, offset, springConf }: { ref: any, offset: ScrollOffset, springConf?: SpringOptions }) => {
    const { scrollYProgress: tempScrollYProgress } = useScroll({
        target: ref,
        offset: offset,
    });

    const scrollYProgress = useSpring(tempScrollYProgress, springConf || {
        stiffness: 400,
        damping: 90,
    });

    return scrollYProgress;
};

export default useSpringScroll;
