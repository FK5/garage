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
        "We use state-of-the-art scan tool equipment to perform engine diagnostics and repair.",
      image: "engine.jpg",
    },
    {
      id: "2",
      title: "TRANSMISSIONS",
      description:
        "We diagnose and repair all types of transmissions if repairable.",
      image: "transmission.jpg",
    },
    {
      id: "3",
      title: "DIAGNOSTIC",
      description:
        "Our certified technicians use the lastest diagnostic equipment to service and repair yout vehicles.",
      image: "street-rover.jpg",
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
      <div className="hidden sm:flex flex flex-col items-center bg-white pt-[8rem] px-5 sm:px-20 sm:pt-40 pb-20">
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
      <div className="flex flex-col sm:hidden bg-white flex items-center justify-center py-12 px-5">
        <p className="text-2xl font-bold mb-4">OUR SERVICES</p>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper w-full h-[40rem]"
          centeredSlides={true}
        >
          <SwiperSlide>
            <ServiceCard
              title="OIL CHANGES"
              description="Vehicle Maintenance is extremely important and the easiest thing a vehicle owner can do is get the oil changed."
              topDown={true}
              image="engine.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard
              title="OIL CHANGES"
              description="Vehicle Maintenance is extremely important and the easiest thing a vehicle owner can do is get the oil changed."
              topDown={true}
              image="https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard
              title="OIL CHANGES"
              description="Vehicle Maintenance is extremely important and the easiest thing a vehicle owner can do is get the oil changed."
              topDown={true}
              image="https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
