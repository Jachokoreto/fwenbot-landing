import React from 'react'
import UpdateCard from './UpdateCard'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface Update {
    imageSrc: string
    date: string
    content: string
}

const updates: Update[] = [
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/1584004785080b507633a97556f9847b3d57f1e98d32729755868da1a981249d?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        date: '10th March 2024',
        content: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/1584004785080b507633a97556f9847b3d57f1e98d32729755868da1a981249d?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        date: '10th March 2024',
        content: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/1584004785080b507633a97556f9847b3d57f1e98d32729755868da1a981249d?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        date: '10th March 2024',
        content: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/d8db22d586b3afa51ea7199a037756e46fb012723225c71b54171f0a3c77a8ae?placeholderIfAbsent=true&apiKey=7c31e4cd04e948ec8281a96957eed171',
        date: '10th March 2024',
        content: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor',
    },
]

const RecentUpdates: React.FC = () => {
    return (
        <section className="container mx-auto relative my-20 flex flex-col">
            <h1 className="text-6xl font-bold max-md:mt-10 max-md:text-4xl">
                Recent Updates
            </h1>
            <p className='mt-4'>
                Check out some of our major updates and collaboration posts on
                Twitter.
            </p>
            <div className="mt-3.5 flex min-h-[405px] w-full items-center gap-6 self-center overflow-x-auto p-4 max-md:max-w-full">
                {updates.map((update, index) => (
                    <UpdateCard
                        key={index}
                        imageSrc={update.imageSrc}
                        date={update.date}
                        content={update.content}
                        isLastCard={false}
                    />
                ))}
            </div>
            <div className="mx-auto mt-8 flex gap-10">
                <motion.button className="size-16 rounded-full bg-yellow-400 text-xl font-bold flex justify-center items-center" >
                    <FaChevronLeft />
                </motion.button>
                <motion.button className="size-16 rounded-full bg-yellow-400 text-xl font-bold flex justify-center items-center" >
                    <FaChevronRight />
                </motion.button>
            </div>
        </section>
    )
}

export default RecentUpdates
