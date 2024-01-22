'use client'

import { useRef } from 'react'
import { useRouter } from "next/navigation";

export default function AboutSection() {
    const aboutSectionRef = useRef<HTMLDivElement>(null);

  const { push } = useRouter();

  return (
    <>
      <div id="about-section" ref={aboutSectionRef} className="flex flex-col justify-center dark:text-black bg-white px-5 py-20 sm:px-20 sm:py-36">
        <p className="block text-center pb-8 px-[1rem] sm:px-[4rem] w-1/2 text-2xl sm:text-6xl font-bold w-full">
          WE UNDERSTAND HOW IMPORTANT IT IS TO FIND THE RIGHT AUTO SERVICE
        </p>
        <p className="text-center pb-[3rem] px-[1rem] sm:px-[3rem] text-base sm:text-lg">
          Car repairs and maintenance can be expensive and no one wants to have
          pay to repair damage caused by shoddy repair service. When you bring
          your car into our auto shop, you won&apos;t have to worry because our
          staff is comprised of ASE certified technicians who are committed to
          making sure you have a safe dependable car.
        </p>
        <p
          className="text-center px-[1rem] sm:px-[3rem] text-base sm:text-lg underline font-medium hover:font-bold hover:cursor-pointer hover:text-red-500"
          onClick={() => push("/about")}
        >
          MORE ABOUT US
        </p>
      </div>
    </>
  );
}
