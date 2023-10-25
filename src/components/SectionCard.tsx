import Image from "next/image";
import { FC } from "react";

interface SectionCardProps {
    title: string;
    description: string;
    image: string;
    topDown: boolean;
}

// export default function SectionCard() {
const SectionCard: FC<SectionCardProps> = ({title, description, topDown = true}) => {

    const lineBreak = (
        <>
            <div className="h-[3px]" />
            <div className="bg-black h-[1px] m-0 p-0 border-0 border-white"/>
            <div className="h-[4px]" />
        </>
    )

    const titleDiv = (
        <>
            {lineBreak}

            <div className="flex py-4 sm:py-7">
                <p className="text-lg sm:text-2xl font-bold">
                    {title}
                </p>
            </div>

            {lineBreak}

            <div className="my-4 sm:my-8">
                <p className="text-base sm:text-lg"> 
                    {description}
                </p>
            </div>
        </>
    )

    const imageDiv = (
        <div className="mb-[30px]">
            <Image
                src={"https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                width={400}
                height={600}
                alt="img"
                />
        </div>
    )

    return (
        <div className='flex flex-col w-[400px]'>
            {topDown ? titleDiv : imageDiv}
            {topDown ? imageDiv : titleDiv}
        </div>
    )
}

export default SectionCard;