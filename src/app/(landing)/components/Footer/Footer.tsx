/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import SitemapLinks from './SitemapLinks'
import UsefulLinks from './UsefulLinks'
import ContactUs from './ContactUs'
import Logo from './Logo'

const Footer: React.FC = () => {
    return (
        <footer className="mt-20 flex w-full flex-col items-center rounded-t-3xl bg-[#FFE769] px-20 pb-5 pt-14 max-md:mt-10 max-md:max-w-full max-md:px-5">
            <div className="flex w-full max-w-[1120px] flex-col max-md:max-w-full">
                <div className="flex flex-wrap items-start justify-between gap-10 rounded-3xl max-md:max-w-full">
                    <SitemapLinks />
                    <UsefulLinks />
                    <ContactUs />
                    <Logo />
                </div>
                <hr className="mt-6 h-px shrink-0 border border-solid border-black max-md:max-w-full" />
                <p className="mt-6 self-center text-center text-base text-black">
                    Copyright © 2024 XXX Labs. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
