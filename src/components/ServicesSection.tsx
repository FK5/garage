"use client";
import ServiceCard from "./ServiceCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

import { Pagination } from "swiper/modules";

export default function ServicesSection() {
  const { push } = useRouter();

  const serviceCardsTexts = [
    {
      id: "1",
      title: "ENGINES",
      description:
        "We utilize state-of-the-art scanning equipment to conduct engine diagnostics and repairs.",
      image: "engine.jpg",
    },
    {
      id: "2",
      title: "TRANSMISSIONS",
      description:
        "We diagnose and repair all types of transmissions, provided they are repairable.",
      image: "transmission.jpg",
    },
    {
      id: "3",
      title: "DIAGNOSTIC",
      description:
      "Our certified technicians utilize the latest diagnostic equipment to service and repair your vehicles.",
      image: "diagnostic.jpg",
    },
  ];

  const serviceCard = (
    key: string,
    title: string,
    description: string,
    topDown: boolean,
    image: string
  ) => (
    <div key={key} className="basis-[31.3%]">
      <ServiceCard
        title={title}
        description={description}
        topDown={topDown}
        image={image}
      />
    </div>
  );

  return (
    <>
      <div id="services-section" className="hidden sm:flex dark:text-black flex flex-col items-center bg-white pt-[8rem] px-5 sm:px-20 sm:pt-40 pb-20">
        <p className="text-5xl font-bold mb-4">OUR SERVICES</p>
        <p
          className="mb-16 text-center px-[1rem] sm:px-[3rem] text-2xl sm:text-xl underline font-medium hover:font-bold hover:cursor-pointer hover:text-red-500"
          onClick={() => {
            push("/services");
          }}
        >
          VIEW ALL SERVICES
        </p>

        <div className="flex flex-wrap gap-10">
          {serviceCardsTexts.map((element, index) =>
            serviceCard(
              element.id,
              element.title,
              element.description,
              index % 2 == 0,
              element.image
            )
          )}
        </div>
      </div>
      <div id="services-section-mobile" className="flex flex-col sm:hidden dark:text-black bg-white flex items-center justify-center pt-24 sm:py-12 px-5">
        <p className="text-2xl font-bold mb-4">OUR SERVICES</p>
        <p
          className="mb-4 text-center px-[1rem] text-md underline font-medium hover:font-bold hover:cursor-pointer hover:text-red-500"
          onClick={() => {
            push("/services");
          }}
        >
          VIEW ALL SERVICES
        </p>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper w-full h-[40rem]"
          centeredSlides={true}
        >
          {serviceCardsTexts.map((element, index) => (
            <SwiperSlide key={index}>
              {serviceCard(
                element.id,
                element.title,
                element.description,
                true,
                element.image
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
