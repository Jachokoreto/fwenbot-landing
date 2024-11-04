/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaDiscord } from 'react-icons/fa'
import Link from 'next/link'

const socialIcons = [
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a374c01409eab1ae0e0bb8c66fa8daca54e1b1ba715259494828dc55a517a9e?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        alt: 'Social media icon 1',
    },
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bd7344a402159c170a00ad0a0cbd0f88aa3561eb9e4b443e262f75a7061e4d22?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        alt: 'Social media icon 2',
    },
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8264f7178e3ced111885e3d591d16eb45531bded5c3730db1da70bd9ba4f163e?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        alt: 'Social media icon 3',
    },
]

const ContactUs: React.FC = () => {
    return (
        <section className="flex w-[265px] min-w-[240px] flex-col justify-between">
            <h2 className="text-2xl font-medium opacity-60">Contact Us</h2>
            <div className="mt-3 flex items-start self-start">
                {/* {socialIcons.map((icon, index) => (
                    <img
                        key={index}
                        loading="lazy"
                        src={icon.src}
                        alt={icon.alt}
                        className="mr-2 aspect-square w-[48px] object-contain"
                    />
                ))} */}

                <Link href={""}>
                    <FaInstagram className="mr-4 aspect-square size-[40px] object-contain hover:scale-110 transition-all" />
                </Link>
                <Link href={""}>
                    <FaSquareXTwitter className="mr-4 aspect-square size-[40px] object-contain hover:scale-110 transition-all" />
                </Link>
                <Link href={"https://discord.gg/rYzN89rG3G"}>
                    <FaDiscord className="mr-4 aspect-square size-[40px] object-contain hover:scale-110 transition-all" />
                </Link>
            </div>
        </section>
    )
}

export default ContactUs
