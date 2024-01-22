"use client";
import { FC, useState, useEffect } from "react";

import Divider from "./Divider";
import Image from "next/image";

interface SectionCardProps {
  title: string;
  description: string;
  image: string;
  topDown: boolean;
}

const ServiceCard: FC<SectionCardProps> = ({
  title,
  description,
  topDown = true,
  image,
}) => {
  const [titleDiv, setTitleDiv] = useState(<></>);
  const [imageDiv, setImageDiv] = useState(<></>);

  useEffect(() => {
    setTitleDiv(
      <>
        {!topDown? <div className='mt-4'/>:""}
        <Divider />

        <div className="flex py-2 sm:py-2">
          <p className="text-lg sm:text-2xl font-bold">{title}</p>
        </div>

        <Divider />

        <div className="my-2 sm:my-2">
          <p className="text-base sm:text-lg">{description}</p>
        </div>
      </>
    );

    setImageDiv(
      <div className="w-full h-[500px] relative">
        <Image
          objectFit="cover"
          alt=""
          className={`my-4 h-[400px]`}
          fill={true}
          src={`/${image}`}
        />
      </div>
    );

    return () => {
      setTitleDiv(<></>);
      setImageDiv(<></>);
    };
  }, []);

  // const titleDiv = (
  //     <>
  //         <Divider />

  //         <div className="flex py-2 sm:py-2">
  //             <p className="text-lg sm:text-2xl font-bold">
  //                 {title}
  //             </p>
  //         </div>

  //         <Divider />

  //         <div className="my-2 sm:my-2">
  //             <p className="text-base sm:text-lg">
  //                 {description}
  //             </p>
  //         </div>
  //     </>
  // )

  //   const imageDiv = (
  //     // <Image alt='' className={`my-4 h-[400px] w-full bg-cover bg-[center_bottom] bg-no-repeat`} width={'4000'} height={'10000'} src={`/${image}`}/>
  //     <div
  //       className={`my-4 h-[400px] w-full bg-[url(/${image})] bg-cover bg-[center_bottom] bg-no-repeat`}
  //     />
  //   );

  return (
    <div className="flex flex-col">
      {topDown ? titleDiv : imageDiv}
      {topDown ? imageDiv : titleDiv}
    </div>
  );
};

export default ServiceCard;
