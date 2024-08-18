import Image from 'next/image'
import HeroSection from './components/hero-section'
import PartnersBanner from './components/partners-banner'
import Intro from './components/intro'
import Features from './components/features'
import Community from './components/community'
import Roadmap from './components/roadmap'
import RecentUpdates from './components/recent-updates'
import Footer from './components/Footer/Footer'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <HeroSection />
            <PartnersBanner />
            <Intro />
            <Features />
            <Community />
            <Roadmap />
            <RecentUpdates />
            <Footer />
        </main>
    )
}
