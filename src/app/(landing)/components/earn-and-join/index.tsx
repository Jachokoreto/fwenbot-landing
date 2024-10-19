'use client'

import { useEffect, useRef, useState } from 'react'
import DesktopView from './DesktopView'
import MobileView from './MobileView'

const EarnAndJoin = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

    useEffect(() => {
        if (ref && ref.current) {
            const resizeObserver = new ResizeObserver((entries) => {
                if (entries[0]) {
                    setIsMobile(entries[0].contentRect.width < 1024)
                }
            })
            resizeObserver.observe(ref.current)
            return () => {
                resizeObserver.disconnect()
            }
        }
    }, [ref])

    return (
        <section
            className="bg-secondary flex w-screen justify-center"
            ref={ref}
        >
            {isMobile !== undefined &&
                (isMobile ? <MobileView /> : <DesktopView />)}
        </section>
    )
}

export default EarnAndJoin
