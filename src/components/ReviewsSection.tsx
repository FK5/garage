"use client";
import { StarIcon } from "@heroicons/react/24/solid";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function ReviewsSection() {
  const lineBreak = (
    <div className="my-6">
      <div className="h-[3px]" />
      <div className="bg-black h-[1px] m-0 p-0 border-0 border-white" />
      <div className="h-[4px] mb-8" />
    </div>
  );

  const reviewComp = (
    message: string,
    person: string,
    numberOfStars: number
  ) => {
    const itemsArray = Array.from(
      { length: numberOfStars },
      (_, index) => index
    );
    return (
      <div>
        {lineBreak}

        <div className="flex flex-col">
          <div className="flex text-red-500 mb-4">
            {itemsArray.map((_, index) => (
              <StarIcon key={index} height="30px" />
            ))}
          </div>

          <div>
            <p className="text-lg mb-6">{message}</p>

            <p className="text-xl font-bold">{person}</p>
          </div>
        </div>

        {lineBreak}
        <div className="mb-12" />
      </div>
    );
  };

  return (
    <>
      <div id="reviews-section" className="sm:relative hidden sm:block h-[50rem] dark:text-black bg-white pl-20">
        <div className="h-5/6 w-9/12 left-0 bottom-0 bg-white absolute z-10 px-5 pt-5 sm:w-1/2 sm:px-20 sm:pt-14">
          <p className="font-mono text-5xl font-bold">
            <span className="text-red-500">100%</span> APPROVED BY CUSTOMERS
          </p>

          <Swiper
            id={"reviews-swiper"}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper w-full"
            centeredSlides={true}
          >
            <SwiperSlide>
              {reviewComp(
                "Impressive expertise! They diagnosed and fixed my car's issue with precision. Fast, reliable service , my car runs better than ever",
                "Mehieddine Karouni",
                5
              )}
            </SwiperSlide>
            <SwiperSlide>
              {reviewComp(
                "Exceptional work! Quick turnaround, fair pricing, and top-notch customer service. This garage is my go-to for car repairs.",
                "Houssam Lakkis",
                5
              )}
            </SwiperSlide>
            <SwiperSlide>
              {reviewComp(
                "Great service overall! The garage fixed my car effectively, but there was a slight delay. Friendly staff and fair pricing make it a solid choice for car repairs.",
                "Fouad Khalife",
                4
              )}
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="h-full w-8/12 right-0 absolute bg-[url(/review.jpg)] bg-cover bg-[center_bottom_-5rem] bg-no-repeat" />
      </div>

      <div id="reviews-section-mobile" className="sm:hidden flex flex-col py-20 dark:text-black bg-white px-5">
        <p className="font-mono text-3xl font-bold">
          <span className="text-red-500">100%</span> APPROVED BY CUSTOMERS
        </p>
        <Swiper
          id={"reviews-swiper"}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper w-full"
          centeredSlides={true}
        >
          <SwiperSlide>
            {reviewComp(
              "Impressive expertise! They diagnosed and fixed my car's issue with precision. Fast, reliable service , my car runs better than ever",
              "Mehieddine Karouni",
              5
            )}
          </SwiperSlide>
          <SwiperSlide>
            {reviewComp(
              "Exceptional work! Quick turnaround, fair pricing, and top-notch customer service. This garage is my go-to for car repairs.",
              "Houssam Lakkis",
              5
            )}
          </SwiperSlide>
          <SwiperSlide>
            {reviewComp(
              "Great service overall! The garage fixed my car effectively, but there was a slight delay. Friendly staff and fair pricing make it a solid choice for car repairs.",
              "Fouad Khalife",
              4
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
