import { useState, useRef, useEffect } from 'react'
import { useEventCallback } from 'usehooks-ts'
import BIRDS from 'vanta/dist/vanta.birds.min'
import DOTS from 'vanta/dist/vanta.dots.min'
// import DOTS from 'vanta/src/vanta.dots'

const AnimatedBg = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null)
    const myRef = useRef(null)
    // useEffect(() => {
    //     if (!vantaEffect) {
    //         setVantaEffect(
    //             DOTS({
    //                 el: myRef.current,
    //             })
    //         )
    //     }
    //     return () => {
    //         if (vantaEffect) vantaEffect.destroy()
    //     }
    // }, [vantaEffect])

    useEffect(() => {
        DOTS({
            el: '#vanta',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xff9620,
            backgroundColor: 0xffeccd,
            size: 6.10,
            showLines: false
        })
    }, [])
    return (
        <div
            id="vanta"
            // ref={myRef}
            className="absolute left-0 top-0 h-screen w-screen"
        ></div>
    )
}

export default AnimatedBg
