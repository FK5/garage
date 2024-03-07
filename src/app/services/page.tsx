'use client'

import { FC } from "react";
import ServiceCard from "@/components/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper/modules";

const Services: FC = () => {
  const serviceCardsTexts = [
    {
      id: "1",
      title: "ENGINES",
      description:
        "We use state-of-the-art scan tool equipment to perform engine diagnostics and repair.",
      imageName: "engine.jpg",
    },
    {
      id: "2",
      title: "TRANSMISSIONS",
      description:
        "We diagnose and repair all types of transmissions if repairable.",
      imageName: "transmission.jpg",
    },
    {
      id: "3",
      title: "SUSPENSION SYSTEMS",
      description:
        "We repair and change all types of suspensions and its mechanism",
      imageName: "beach-rover.jpg",
    },
    {
      id: "4",
      title: "ELECTRICAL SYSTEMS",
      description:
        "We diagnose, check and repair electrical circuits in all cars.",
      imageName: "electrical.jpg",
    },
    {
      id: "5",
      title: "DIAGNOSTIC",
      description:
        "Our certified technicians use the lastest diagnostic equipment to service and repair yout vehicles.",
      imageName: "diagnostic.jpg",
    },
    {
      id: "6",
      title: "PAINT JOBS",
      description:
        "We use the best products and tools to give a mirror effect to your car.",
      imageName: "red-rover.jpg",
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
      <div className="hidden sm:flex sm:flex-col bg-white px-5 sm:px-20 sm:pt-20 pb-20 dark:text-black">
        <div className="flex flex-wrap gap-10">
          {serviceCardsTexts.map((element, index) =>
            serviceCard(
              element.id,
              element.title,
              element.description,
              index % 2 == 0,
              element.imageName
            )
          )}
        </div>
      </div>

      <div
        className="flex flex-col sm:hidden dark:text-black bg-white items-center justify-center py-8 px-5"
      >
        <p className="text-2xl font-bold mb-2">OUR SERVICES</p>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper w-full h-[47rem]"
          centeredSlides={true}
        >
          {serviceCardsTexts.map((element, index) => (
            <SwiperSlide key={index}>
              {serviceCard(
                element.id,
                element.title,
                element.description,
                true,
                element.imageName
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Services;
