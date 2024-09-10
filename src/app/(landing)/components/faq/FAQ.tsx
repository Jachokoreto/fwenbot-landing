import React from 'react'
// import classNames from 'classnames'
import * as Accordion from '@radix-ui/react-accordion'
import { FaChevronDown } from "react-icons/fa";


const AccordionItem = React.forwardRef<any, any>(
    ({ children, className, value, ...props }, forwardedRef) => (
        <Accordion.Item
            className={`mt-px overflow-hidden first:mt-0 focus-within:relative focus-within:z-10 rounded-3xl`}
            value={value}
            {...props}
            ref={forwardedRef}
        >
            {children}
        </Accordion.Item>
    )
)
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<any, any>(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Header className="flex">
            <Accordion.Trigger
                className={`hadow-mauve6 hover:bg-mauve2 group flex py-4  flex-1 items-center justify-between bg-yellow-200 px-6 leading-none  outline-none cursor-pointer`}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <FaChevronDown
                    className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                    aria-hidden
                />
            </Accordion.Trigger>
        </Accordion.Header>
    )
)
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef<any, any>(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Content
            className={`data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden bg-yellow-200`}
            {...props}
            ref={forwardedRef}
        >
            <div className="px-5 pb-4">{children}</div>
        </Accordion.Content>
    )
)
AccordionContent.displayName = 'AccordionContent'

const faqContents = [
    {
        question: 'What Is Fwen Bot?',
        answer:
            'Fwen Bot is an intuitive Discord Trading Bot built with a strong focus on user experience. We understand that crypto markets can be complex and at time even overwhelming. We’re looking to support our traders every step of the way as an everlasting trading companion within the crypto space.',
    },
    {
        question: 'Why should I use Fwen Bot?',
        answer: 'Aside from having an intuitive and user friendly platform, we’re committed in fostering a collaborative and supporting community that provides great insights within the space. With the introduction of our Shilling feature, users who help one another are rewarded with a portion of the transaction fees that Fwen Bot receives after every successful trade.'
    },
    {
        question: 'How do I start using Fwen Bot?',
        answer: 'Click here or on any of the prompts available on our website and it will redirect you to our Discord server. From there, you will be able  to integrate Fwen Bot directly on to your Discord application seamlessly. Should you require any assistance, feel free to reach out to us at: hello@fwenbot.com (example)'
    },
    {
        question: 'How much does Fwen Bot charge to use their bot/tools?',
        answer: 'Fwen Bot charges a 1% transaction fee for every successful transaction. This fee not only supports the ongoing development and maintenance of the bot but is also used to reward our users for referrals and shilling activities, ensuring that our community benefits as we grow.'
    },
    {
        question: 'Is Fwen Bot safe to use?',
        answer: 'Fwen Bot is designed with security as a top priority to ensure the safety of our users. We implement top-tier security protocols to protect users’ assets and personal information. Fwen Bot also operates within the familiar and secure environment of Discord, adding an additional layer of trust for users who are already comfortable with the platform. All in all, Fwen Bot is built with multiple layers of security to provide a trustworthy and secure environment for all users. '
    },
    {
        question: 'How do I earn rewards by using Fwen Bot?',
        answer: `You can earn rewards with Fwen Bot through shilling and referrals. By promoting or "shilling" tokens and successful trades within your community, you'll earn rewards based on your engagement. Additionally, through our referral program, you can invite others to join Fwen Bot, and for every successful transaction made by someone using your referral link, you'll receive a portion of the transaction fees as a reward.`
    }
]

const FAQ = () => {
    return (
        <section className="container my-20">
            <h1 className='w-full text-center'>F.A.Q</h1>
            <Accordion.Root
                className="mx-auto w-full max-w-xl space-y-3 mt-10"
                type="single"
                defaultValue="item-1"
                collapsible
            >
                {faqContents.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion.Root>
        </section>
    )
}

export default FAQ
