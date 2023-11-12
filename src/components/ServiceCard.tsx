import { FC } from "react";

import Divider from "./Divider";

interface SectionCardProps {
    title: string;
    description: string;
    image: string;
    topDown: boolean;
}

const ServiceCard: FC<SectionCardProps> = ({title, description, topDown = true, image}) => {

    const titleDiv = (
        <>
            <Divider />

            <div className="flex py-2 sm:py-2">
                <p className="text-lg sm:text-2xl font-bold">
                    {title}
                </p>
            </div>

            <Divider />

            <div className="my-2 sm:my-2">
                <p className="text-base sm:text-lg"> 
                    {description}
                </p>
            </div>
        </>
    )

    const imageDiv = (
        <div className="my-4 h-[400px] w-full bg-[url(https://images.pexels.com/photos/9784143/pexels-photo-9784143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-[center_bottom] bg-no-repeat" />
    )

    return (
        <div className='flex flex-col'>
            {topDown ? titleDiv : imageDiv}
            {topDown ? imageDiv : titleDiv}
        </div>
    )
}

export default ServiceCard;