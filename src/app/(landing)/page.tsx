'use client'
import Image from 'next/image'
import HeroSection from './components/hero-section'
import PartnersBanner from './components/section2/partners-banner'
import Intro from './components/section2/intro'
import Features from './components/features'
import Roadmap from './components/roadmap'
import RecentUpdates from './components/recent-updates'
import Footer from './components/Footer/Footer'
import WhyChooseFwenbot from './components/why-choose-fwenbot'
import FAQ from './components/faq'
import Stats from './components/section2/stats'
import Section2 from './components/section2/Section2'
import Header from './components/hero-section/Header'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Section2b } from './components/section2/Section2b'
import { CustomFAB } from './components/CustomFAB'
import EarnAndJoin from './components/earn-and-join'

export default function Home() {
    return (
        <motion.main
            className="max-w-screen"
            // style={{ background: backgroundColour }}
        >
            <Header logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/92be01a40e42b2667bf2ed01c42a67c00773eeedf8c9125b7bf8a471aaf3fd01?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171" />
            <HeroSection />
            {/* <PartnersBanner />
            <Stats /> */}
            <Section2 />
            <Section2b />
            <WhyChooseFwenbot />
            <Features />
            <EarnAndJoin />
            <Roadmap />
            <RecentUpdates />
            <FAQ />
            <Footer />
            <CustomFAB />
        </motion.main>
    )
}
