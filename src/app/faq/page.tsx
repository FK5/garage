"use client";
import { FC } from "react";
import React from "react";

const Faq: FC = () => {

  return (
    <div className="sm:px-20 px-5 py-12 bg-white">
      <div className="flex flex-col">
        <div>
          <p className="text-red-500 font-bold text-4xl sm:text-5xl mb-16 sm:mb-20">Frequently Asked Questions</p>
        </div>
        <div className="mb-12">
          <p className="text-red-500 font-bold text-xl sm:text-2xl mb-4">- How often should I change the oil? </p>
          <p className="text-black text-lg sm:text-xl">The frequency of oil changes depends on how you use your vehicle. For city driving or long rides, and depending on the type of oil, it can range from 5,000 to 15,000 kilometers.</p>
        </div>
        <div className="mb-12">
          <p className="text-red-500 font-bold text-xl sm:text-2xl mb-4">- How long should one drive below 100 kilometers per hour after refurbishing the engine? </p>
          <p className="text-black text-lg sm:text-xl">500km at least.</p>
        </div>
        <div className="mb-12 sm:mb-24">
          <p className="text-red-500 font-bold text-xl sm:text-2xl mb-4">- If I change any hose in the car, will it leak again? </p>
          <p className="text-black text-lg sm:text-xl">Yes, but not necessarily from the same location where the work was done. There are approximately 10 or more water components in the car, so it may leak from any place. (This also applies to oil.)</p>
        </div>

        <div>
          <p className="text-black font-bold text-lg">We are working on adding more frequently asked questions in order to assist you better in the future.</p>
        </div>

      </div>
    </div >
  );
};

export default Faq;
