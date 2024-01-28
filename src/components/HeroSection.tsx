"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

export default function HeroSection() {
  const { push } = useRouter();
  const servicesClickHandle = () => {
    push("/services");
  };

  return (
    <>
      <motion.div
        className="bg-[url(/grills.jpg)] bg-cover bg-[center_bottom] bg-no-repeat h-[38.5rem] pl-5 sm:pl-20"
      >
        <p className="pt-36  w-1/2 text-3xl sm:text-6xl font-bold text-white leading-none">
          KEEPING YOU ON THE ROAD WITH SERVICE YOU CAN TRUST
        </p>
        <div
          onClick={servicesClickHandle}
          className="hover:bg-black hover:text-white hover:cursor-pointer cursor-default bg-gray-200 text-black h-10 w-fit mt-10 px-5 py-8 flex items-center"
        >
          {" "}
          <p className="font-bold text-sm">EXPLORE OUR SERVICES</p>{" "}
          <ArrowRightIcon className="h-4 w-4 ml-4" />
        </div>
      </motion.div>
    </>
  );
}
