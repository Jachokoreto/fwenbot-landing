import { motion } from 'framer-motion'
import React from 'react'

interface PhaseCardProps {
    phaseNumber: number
    items: string[]
    className?: string
}

const PhaseCard: React.FC<PhaseCardProps> = ({
    phaseNumber,
    items,
    className,
}) => {
    return (
        <motion.div
            className="relative z-20 mx-auto flex w-full flex-col overflow-hidden rounded-2xl border-2 border-solid border-black bg-[#FFF1AA] px-8 py-4 text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] max-md:max-w-full max-md:px-5"
            whileHover={{ y: -20 }}
        >
            <div className="flex items-center justify-center gap-2 self-start whitespace-nowrap font-bold text-black text-opacity-20">
                <span className="my-auto self-stretch text-xl">PHASE</span>
                <span className="my-auto self-stretch text-center text-3xl">
                    {phaseNumber}
                </span>
            </div>
            {items.map((item, index) => (
                <div className='flex mt-5' key={index}>
                    <div  className='bg-black/30 size-2 rounded-full mt-2'/>
                    <p
                        key={index}
                        className="w-[394px] max-w-full pb-3 text-xl ml-2"
                    >
                        {item}
                    </p>
                </div>
            ))}
        </motion.div>
    )
}

export default PhaseCard
