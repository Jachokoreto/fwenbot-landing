import React, { useRef } from 'react'
import PartnersBanner from './partners-banner'
import Stats from './stats'
import { useScroll } from 'framer-motion'
import Intro from './intro'

const Section2 = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })


    return (
        <section ref={ref} className='w-screen h-screen bg-yellow-200'>
            <PartnersBanner scrollYProgress={scrollYProgress} />
            <Stats />
            <Intro />
        </section>
    )
}

export default Section2
