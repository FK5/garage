"use client"

import { FC } from "react";

import { useRouter } from "next/navigation";


const Shop: FC = () => {

  const { push } = useRouter();

  const contactClickHandle = () => {
    push("/")
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.document
          .getElementById("contact-section")!
          .scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  }

  return (
    <>
      <div className="flex flex-col justify-center dark:text-black bg-white px-5 py-10 sm:px-20 sm:py-20">
        <div className="flex justify-around gap-10">
          <div className="flex flex-col w-5/12 ">
            <p className="text-red-500 font-bold text-2xl sm:text-4xl mb-4">Items we Offer</p>
            <p className="text-black font-semibold text-lg sm:text-xl">- Engine Oil Filter</p>
            <p className="text-black font-semibold text-lg sm:text-xl">- Transmission Oil Filter</p>
            <p className="text-black font-semibold text-lg sm:text-xl">- Oil Filter</p>
            <p className="text-black font-semibold text-lg sm:text-xl">- Air condition System</p>
            <p className="text-black font-semibold text-lg sm:text-xl">- Parts</p>
          </div>

          <div className="flex flex-col w-5/12">
            <p className="text-red-500 font-bold text-2xl sm:text-4xl mb-4">Labor Services we Offer</p>
            <p className="text-black font-semibold text-lg sm:text-xl">- Brake Service</p>
            <p className="text-black font-semibold text-lg sm:text-xl">- Oil Change</p>
            <p className="text-black font-semibold text-lg sm:text-xl">- Wheel Alignment</p>
            <p className="text-black font-semibold text-lg sm:text-xl">- Engine Service</p>
            <p className="text-black font-semibold text-lg sm:text-xl">- Transmission Service</p>
          </div>
        </div>

        <p className="text-black font-semibold text-xl flex mt-12 justify-center"> <span onClick={contactClickHandle} className="font-extrabold cursor-pointer hover:text-red-500">Contact us</span> &nbsp; for more details</p>

        <hr className="my-28 sm:my-12"/>

        <div className="flex flex-col">
          <p className="text-red-500 font-extrabold text-5xl mb-4"> Coming Soon!</p>
          <p className="text-black font-bold text-2xl">
            We are working on our own E-commerce shop.
          </p>
          <p className="text-black font-bold text-2xl">
            You will be able to order parts online!
          </p>
        </div>
      </div>
    </>
  );
};

export default Shop;
