'use client'
import { StarIcon } from "@heroicons/react/24/solid"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function ReviewsSection() {

    const lineBreak = (
        <div className="my-6">
            <div className="h-[3px]" />
            <div className="bg-black h-[1px] m-0 p-0 border-0 border-white"/>
            <div className="h-[4px] mb-8" />
        </div>
    )

    const reviewComp = (
        <div>
            {lineBreak}

            <div className="flex flex-col">
                <div className="flex text-red-500 mb-4">
                    <StarIcon height="30px"/>
                    <StarIcon height="30px"/>
                    <StarIcon height="30px"/>
                    <StarIcon height="30px"/>
                    <StarIcon height="30px"/>
                </div>

                <div>
                    <p className="text-lg mb-6">
                        {`"Great service and honest mechanic I always come when I have
                        an issue with my cars and always recommend this place
                        to everybody."`}
                    </p>

                    <p className="text-xl font-bold">
                        {`JOHN SMITH`}
                    </p>
                </div>

            </div>

            {lineBreak}
            <div className="mb-12"/>
        </div>
    )

    return (
        <>
            <div className="hidden sm:relative h-[50rem] bg-white pl-20">

                <div className="h-5/6 w-9/12 left-0 bottom-0 bg-white absolute z-10 px-5 pt-5 sm:w-1/2 sm:px-20 sm:pt-14">
                    <p className="font-mono text-5xl font-bold"><span className="text-red-500">100%</span> APPROVED BY CUSTOMERS</p>
                    
                    <Swiper id={'reviews-swiper'} pagination={{clickable: true}} modules={[Pagination]} className="mySwiper w-full" centeredSlides={true} >
                        <SwiperSlide>
                            {reviewComp}
                        </SwiperSlide>
                        <SwiperSlide>
                            {reviewComp}
                        </SwiperSlide>
                        <SwiperSlide>
                            {reviewComp}
                        </SwiperSlide>
                    </Swiper>
                    
                </div>

                <div className="h-full w-8/12 right-0 absolute bg-[url(https://img.freepik.com/free-photo/beautiful-young-latin-woman-driving-her-brand-new-car-showing-her-thumb-up_231208-7751.jpg?w=1060&t=st=1697993520~exp=1697994120~hmac=7a1c7fce4c9d12a333c41a0760973c33e9143cbe47dccccaf539cca2f78b4bf3)] bg-cover bg-[center_bottom_-5rem] bg-no-repeat"/>

            </div>

            <div className="sm:hidden flex flex-col py-20 bg-white px-5">
                <p className="font-mono text-3xl font-bold"><span className="text-red-500">100%</span> APPROVED BY CUSTOMERS</p>
                <Swiper id={'reviews-swiper'} pagination={{clickable: true}} modules={[Pagination]} className="mySwiper w-full" centeredSlides={true} >
                    <SwiperSlide>
                        {reviewComp}
                    </SwiperSlide>
                    <SwiperSlide>
                        {reviewComp}
                    </SwiperSlide>
                    <SwiperSlide>
                        {reviewComp}
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}   