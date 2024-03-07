"use client";

import { PhoneIcon } from "@heroicons/react/20/solid";
import { SiFacebook } from "react-icons/si";
import { SiX } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

import { redirect } from "next/navigation";

import Divider from "./Divider";

export default function FooterSection() {
  const redirectToMap = () => {
    const url =
      "https://www.google.com/maps/place/ZEIN+BROS+FOR+MARBLE+%26+GRANITE+COMPANY/@33.8722303,35.4939265,16.22z/data=!4m6!3m5!1s0x151f178470a68ecd:0x5ff00f58b6fcb7a2!8m2!3d33.8725839!4d35.4942298!16s%2Fg%2F11gfjslhz3?entry=ttu";

    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  const scrollToContact = () => {
    if (typeof window !== "undefined") {
      window.document
        .getElementById("contact-section")!
        .scrollIntoView({ behavior: "smooth" });
      window.document
        .getElementById("contact-section-mobile")!
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToReviews = () => {
    if (typeof window !== "undefined") {
      window.document
        .getElementById("reviews-section")!
        .scrollIntoView({ behavior: "smooth" });
        window.document
        .getElementById("reviews-section-mobile")!
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePhoneNumber1Click = () => {
    const telURI = `tel:+961 76 94 95 98`;
    window.location.href = telURI;
  };

  const handlePhoneNumber2Click = () => {
    const telURI = `tel:+961 70 81 36 66`;
    window.location.href = telURI;
  };

  const lineBreak = (
    <>
      <div className="h-[10px]" />
      <div className="bg-white w-full h-[0.3px] m-0 p-0 border-0 border-black" />
      <div className="h-[4px]" />
    </>
  );

  return (
    <>
      <div className="hidden sm:flex flex-col items-center justify-center bg-stone-900 px-5 sm:px-20">
        <p className="text-white text-3xl w-1/2 text-center font-bold mt-20 mb-8">
          IF YOU HAVE ANY QUESTIONS, FEEL FREE TO CONTACT US
        </p>

        {/* <Divider color='white'/> */}
        {lineBreak}

        <div className="flex justify-center items-center w-full mt-8 mb-8">
          <PhoneIcon className="h-[6rem] text-white mr-8" />
          <div className="flex flex-col">
            <p className="text-white text-5xl text-center font-bold mb-2">
              961 76 94 95 98
            </p>
            <p className="text-white text-5xl text-center font-bold">
              961 70 81 36 66
            </p>
          </div>
        </div>

        {lineBreak}

        <div className="flex justify-between items-center w-full mt-8 mb-8">
          <div className="flex flex-col">
            <p className="text-white mb-2 text-sm">
              Beirut Near Egypt Embassy{"'"}s, Beirut
            </p>
            <p
              className="text-white underline text-sm cursor-pointer hover:font-bold"
              onClick={redirectToMap}
            >
              GET DIRECTIONS
            </p>
          </div>
          <div className="flex gap-6">
            <SiFacebook size={30} color="#FFF" />
            <SiX size={30} color="#FFF" />
            <SiInstagram size={30} color="#FFF" />
          </div>
          <div className="flex flex-col">
            <p className="text-white mb-2 text-sm text-right">
              MON - FRI: 8:30 AM - 6:00 PM
            </p>
            <p className="text-white mb-2 text-sm text-right">
              SAT: 8:30 AM - 2:00 PM
            </p>
          </div>
        </div>

        {lineBreak}

        <div className="flex justify-between items-center w-full my-8">
          <div className="flex gap-4 text-white">
            <p className="text-sm cursor-pointer hover:font-bold">FAQ</p>
            <p
              className="text-sm cursor-pointer hover:font-bold"
              onClick={scrollToReviews}
            >
              REVIEWS
            </p>
            <p
              className="text-sm cursor-pointer hover:font-bold"
              onClick={scrollToContact}
            >
              CONTACT
            </p>
          </div>

          <div className="flex text-white">
            <p className="text-sm">&copy;2023 RoadRovers by Luca</p>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex flex-col items-center justify-center bg-stone-900 px-5">
        <p className="text-white text-xl text-center font-bold mt-14 mb-4">
          IF YOU HAVE ANY QUESTIONS, FEEL FREE TO CONTACT US
        </p>
        {lineBreak}
        <div className="flex justify-center items-center w-full my-8">
          <PhoneIcon className="h-[3rem] text-white mr-2" />
          <div className="flex flex-col">
            <p onClick={handlePhoneNumber1Click} className="text-white text-2xl text-center font-bold mb-2">
              961 76 94 95 98
            </p>
            <p onClick={handlePhoneNumber2Click} className="text-white text-2xl text-center font-bold">
              961 70 81 36 66
            </p>
          </div>
        </div>
        {lineBreak}
        <div className="flex gap-6 my-8">
          <SiFacebook size={30} color="#FFF" />
          <SiX size={30} color="#FFF" />
          <SiInstagram size={30} color="#FFF" />
        </div>
        {lineBreak}
        <div className="flex justify-center items-center text-center w-full mt-8 mb-8">
          <div className="flex flex-col">
            <p className="text-white mb-2 text-sm">OPENING HOURS:</p>
            <p className="text-white mb-2 text-sm text-right">
              MON - FRI: 8:30 AM - 6:00 PM
            </p>
            <p className="text-white mb-2 text-sm text-right mb-4">
              SAT: 8:30 AM - 2:00 PM
            </p>

            <p className="text-white mb-2 text-sm">
              Beirut Near Egypt Embassy{"'"}s, Beirut
            </p>
            <p
              className="text-white mb-2 underline text-sm cursor-pointer hover:text-bold"
              onClick={redirectToMap}
            >
              GET DIRECTIONS
            </p>
          </div>
        </div>
        {lineBreak}

        <div className="flex justify-center items-center w-full my-4">
          <div className="flex gap-4 text-white">
            <p className="text-sm">FAQ</p>
            <p className="text-sm" onClick={scrollToReviews}>
              REVIEWS
            </p>
            <p className="text-sm" onClick={scrollToContact}>
              CONTACT
            </p>
          </div>
        </div>

        {lineBreak}
        <div className="flex justify-center items-center text-white my-4">
          <p className="text-sm">&copy;2023 RoadRovers by Luca</p>
        </div>
      </div>
    </>
  );
}
