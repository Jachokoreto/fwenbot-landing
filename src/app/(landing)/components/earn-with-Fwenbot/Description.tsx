import { TbMoneybag } from 'react-icons/tb'

const Description = () => {
    return (
        <div className="flex w-full flex-col lg:flex-1">
            <p className="font-oswald text-[60px] font-bold">
                Earning with FwenBot
            </p>
            <p className="text-2xl leading-relaxed tracking-wide">
                At Fwen Bot, we believe in rewarding our users for their active
                participation and contributions.
            </p>
            <ol className="w-full space-y-4 font-normal">
                {[
                    'Through our shilling and referral programs, you have the opportunities to earn while you trade and share your insights.',
                    'Rewards for promoting successful trades within your community.',
                    'Rewards for inviting others to experience the benefits of Fwen Bot',
                ].map((list, index) => (
                    <li key={index} className="flex text-lg">
                        <TbMoneybag className="mr-2 mt-1 h-6 min-h-6 w-6 min-w-6" />
                        <p>{list}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Description
