import Link from 'next/link';
import React from 'react';
import { FaDiscord, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const ContactUs: React.FC = () => {
    return (
        <section className="flex w-[265px] min-w-[240px] flex-col justify-between">
            <h2 className="text-2xl font-medium opacity-60">Contact Us</h2>
            <div className="mt-3 flex w-full justify-center self-start md:items-start md:justify-start">
                {/* {socialIcons.map((icon, index) => (
                    <img
                        key={index}
                        loading="lazy"
                        src={icon.src}
                        alt={icon.alt}
                        className="mr-2 aspect-square w-[48px] object-contain"
                    />
                ))} */}

                <Link href="">
                    <FaInstagram className="mr-4 aspect-square size-[40px] object-contain transition-all hover:scale-110" />
                </Link>
                <Link href="">
                    <FaSquareXTwitter className="mr-4 aspect-square size-[40px] object-contain transition-all hover:scale-110" />
                </Link>
                <Link href="https://discord.gg/rYzN89rG3G">
                    <FaDiscord className="mr-4 aspect-square size-[40px] object-contain transition-all hover:scale-110" />
                </Link>
            </div>
        </section>
    );
};

export default ContactUs;
