"use client";

import { useState } from "react";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";

type InfoBarProps = {
  className?: string;
};

const InfoBar: React.FC<InfoBarProps> = ({ className }) => {
  const [isLocationHover, setIsLocationHover] = useState<Boolean>(false);

  const handlePhoneNumberClick = () => {
    const telURI = `tel:+961 76 94 95 98`;
    window.location.href = telURI;
  };

  const redirectToMap = () => {
    const url = "https://maps.app.goo.gl/9DZGqmMCj6w1gJqN6";

    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <div className={`infobar ${className} dark:text-black bg-white sm:flex z-50 flex-row border-b-2 border-black h-14 hidden select-none transition-transform duration-300`}>
        <a className="w-20 border-r-2 border-black hidden sm:block"></a>
        <a className="w-1/3 text-center border-r-2 border-black flex items-center justify-center">
          <PhoneIcon className="h-4 w-4 mr-2" />
          CALL US NOW +961 76 94 95 98
        </a>
        <a className="w-1/3 text-center border-r-2 border-black flex items-center justify-center">
          <CalendarIcon className="h-4 w-4 mr-2" />
          GET A FREE APPOINTMENT
        </a>
        <a
          className="w-1/3 text-center border-r-2 border-black flex items-center justify-center text-red-500 hover:stroke-2 hover:font-bold hover:cursor-pointer"
          onClick={redirectToMap}
          onMouseEnter={() => setIsLocationHover(true)}
          onMouseLeave={() => setIsLocationHover(false)}
        >
          <MapPinIcon
            className={`${isLocationHover ? "stroke-[3]" : ""} h-4 w-4 mr-2`}
          />
          FIND US ON MAP
        </a>
        <a className="w-20 hidden sm:block"></a>
      </div>
      {/* <div className="bg-white flex dark:text-black flex-col z-50 items-center justify-center block sm:hidden w-full">
        <a
          onClick={handlePhoneNumberClick}
          className="text-center flex py-1 border-b-2 border-black w-full flex items-center justify-center"
        >
          <PhoneIcon className="h-4 w-4 mr-2" />
          <span>CALL US NOW +961 76 94 95 98 </span>
        </a>
        <a className="text-center flex py-1 border-b-2 border-black w-full flex items-center justify-center">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span>GET A FREE APPOINTMENT</span>
        </a>
        <a
          onClick={redirectToMap}
          className="text-center flex py-1 border-b-2 border-black w-full flex items-center justify-center text-red-500"
        >
          <MapPinIcon className="h-4 w-4 mr-2" />
          <span>FIND US ON MAP</span>
        </a>
      </div> */}
    </>
  );
}

export default InfoBar;
