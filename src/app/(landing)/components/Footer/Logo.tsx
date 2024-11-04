import React from 'react'
import { AutoplayVideo } from '@/components/AutoplayVideo'

const Logo: React.FC = () => {
    return (
        <div className="flex w-40 flex-col items-end">
            {/* <img
                loading="lazy"
                src="assets/logo-animated.gif"
                alt="Company logo"
                className="aspect-[1.32] w-40 max-w-full bg-transparent object-contain"
            /> */}

            <AutoplayVideo>
                <source src="/assets/idle.webm" type="video/mp4" />
                <source src="/assets/idle.mov" type="video/quicktime" />
            </AutoplayVideo>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/92be01a40e42b2667bf2ed01c42a67c00773eeedf8c9125b7bf8a471aaf3fd01?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171"
                alt="Company logo"
                className="aspect-[1.32] w-40 max-w-full bg-transparent object-contain"
            />
        </div>
    )
}

export default Logo
