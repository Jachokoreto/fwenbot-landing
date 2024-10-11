'use client'
import Image from 'next/image'
import HeroSection from './components/hero-section'
import PartnersBanner from './components/section2/partners-banner'
import Intro from './components/section2/intro'
import Features from './components/features'
import Community from './components/community'
import Roadmap from './components/roadmap'
import RecentUpdates from './components/recent-updates'
import Footer from './components/Footer/Footer'
import WhyChooseFwenbot from './components/why-choose-fwenbot'
import EarnWithFwenbot from './components/earn-with-Fwenbot'
import FAQ from './components/faq'
import Stats from './components/section2/stats'
import PartnersAndStats from './components/section2'
import Section2 from './components/section2'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <HeroSection />
            {/* <PartnersBanner />
            <Stats /> */}
            <Section2 />
            <WhyChooseFwenbot />
            <Features />
            <EarnWithFwenbot />
            {/* <Community /> */}
            <Roadmap />
            <RecentUpdates />
            <FAQ />
            <Footer />
        </main>
    )
}
