import { motion } from 'framer-motion'
import React from 'react'

export const Fwenbot = () => {

    return (
        <motion.div className='flex items-center relative select-none '>
            <motion.div className='flex text-[10rem] font-bebas-neue gap-6'>
                <motion.p>F</motion.p>
                <motion.p>W</motion.p>
                <motion.p>E</motion.p>
                <motion.p>N</motion.p>
            </motion.div>
            {/* <motion.img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/824b838f6ddb638d7227637257c1860771fd765129f679b107de404472148f4e?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
                alt="Decorative Image"
                className="mt-14 aspect-[0.81] w-[231px] max-w-full self-center object-contain max-md:mt-10"
            /> */}
            <motion.video autoPlay muted loop className='absolute w-[50vw] left-[25%]'>
                <source src="/assets/Idle_1.webm" type="video/mp4" />
            </motion.video>
            <motion.div className='flex text-[10rem] font-bebas-neue gap-6 ml-[25vw]'>
                <motion.p>B</motion.p>
                <motion.p>O</motion.p>
                <motion.p>T</motion.p>
            </motion.div>
        </motion.div>
    )
}
