'use client'
import Image from 'next/image'
import HeroSection from './components/hero-section'
import PartnersBanner from './components/partners-banner'
import Intro from './components/intro'
import Features from './components/features'
import Community from './components/community'
import Roadmap from './components/roadmap'
import RecentUpdates from './components/recent-updates'
import Footer from './components/Footer/Footer'
import WhyChooseFwenbot from './components/why-choose-fwenbot'
import EarnWithFwenbot from './components/earn-with-Fwenbot'
import FAQ from './components/faq'
import Stats from './components/stats'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <HeroSection />
            <PartnersBanner />
            <Stats />
            <Intro />
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
