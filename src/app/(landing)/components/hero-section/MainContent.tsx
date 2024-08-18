/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import Button from '@/components/Button'

interface MainContentProps {
    logoSrc: string
    poweredByLogoSrc: string
}

const MainContent: React.FC<MainContentProps> = ({
    logoSrc,
    poweredByLogoSrc,
}) => {
    return (
        <div className="mt-3 flex w-full items-center justify-center gap-5 pb-16 max-md:flex-col">
            <div className="flex w-full flex-col items-center font-medium max-md:mt-10 max-md:max-w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    loading="lazy"
                    src={logoSrc}
                    alt="Main Logo"
                    className="aspect-[3.46] w-[266px] max-w-full object-contain"
                />
                <div className="mt-2 flex w-[132px] max-w-full gap-3.5 text-center text-base text-opacity-80">
                    <span className="my-auto">powered by</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        loading="lazy"
                        src={poweredByLogoSrc}
                        alt="Powered by Logo"
                        className="aspect-[1.04] w-[29px] shrink-0 object-contain"
                    />
                </div>
                <h1 className="mt-7 text-6xl font-semibold max-md:max-w-full max-md:text-4xl">
                    Everyone needs a Fwen
                </h1>
                <Button text="Get Started" primary className="mt-6" />
            </div>
            <Button text="add bot" className="fixed bottom-4 right-4 z-10" />
        </div>
    )
}

export default MainContent