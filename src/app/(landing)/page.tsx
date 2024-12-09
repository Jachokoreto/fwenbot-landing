'use client';
import { motion } from 'framer-motion';

import { CustomFAB } from './components/CustomFAB';
import EarnAndJoin from './components/earn-and-join';
import FAQ from './components/faq';
import Features from './components/features';
import Footer from './components/Footer/Footer';
import HeroSection from './components/hero-section';
import Header from './components/hero-section/Header';
import RecentUpdates from './components/recent-updates';
import Roadmap from './components/roadmap';
import Section2 from './components/section2/Section2';
import { Section2b } from './components/section2/Section2b';

export default function Home() {
    return (
        <motion.main
            className="relative w-full"
        // style={{ background: backgroundColour }}
        >
            <Header logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/92be01a40e42b2667bf2ed01c42a67c00773eeedf8c9125b7bf8a471aaf3fd01?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171" />
            <HeroSection />
            <Section2 />
            <Section2b />
            {/* <WhyChooseFwenbot /> */}
            <Features />
            <EarnAndJoin />
            <Roadmap />
            <RecentUpdates />
            <FAQ />
            <Footer />
            <CustomFAB />
        </motion.main>
    );
}
