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
        <div className={`flex flex-col ${className} max-md:ml-0 max-md:w-full`}>
            <div className="mx-auto flex w-full flex-col overflow-hidden rounded-2xl border-2 border-solid border-black bg-[#FFF1AA] px-8 py-4 text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] max-md:mt-10 max-md:max-w-full max-md:px-5">
                <div className="flex items-center justify-center gap-2 self-start whitespace-nowrap font-bold text-black text-opacity-20">
                    <span className="my-auto self-stretch text-xl">PHASE</span>
                    <span className="my-auto self-stretch text-center text-3xl">
                        {phaseNumber}
                    </span>
                </div>
                {items.map((item, index) => (
                    <p
                        key={index}
                        className="mt-5 w-[394px] max-w-full pb-3 text-xl"
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default PhaseCard
