'use client'
import { ArrowRightIcon} from '@heroicons/react/24/outline'
import SectionCard from './SectionCard'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function ServicesSection() {
    return (
        <>
           <div className='hidden sm:flex h-[70rem] mb-[4.5rem] flex flex-col items-center bg-white pt-[8rem]'>
                <p className='text-5xl font-bold mb-4'>OUR SERVICES</p>
                <p className="text-center px-[1rem] sm:px-[3rem] text-2xl sm:text-xl underline font-medium">
                    VIEW ALL SERVICES
                </p>


                <div className="flex items-center h-auto p-20 bg-white justify-between w-full">

                    <SectionCard 
                        title='OIL CHANGES'
                        description='Vehicle Maintenance is extremely important and the easiest thing a vehicle owner can do is get the oil changed.'
                        topDown={true}
                        image='https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    />
                    <SectionCard 
                        title='OIL CHANGES'
                        description='Vehicle Maintenance is extremely important and the easiest thing a vehicle owner can do is get the oil changed.'
                        topDown={false}
                        image='https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    />
                    <SectionCard 
                        title='ENGINES'
                        description='We use state-of-the-art scan tool
                        equipment to perform engine diagnostics
                        and repair.'
                        topDown={true}
                        image="https://images.pexels.com/photos/3757226/pexels-photo-3757226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />

                </div>

           </div>
           <div className='block sm:hidden h-[70rem] bg-white flex items-center justify-center px-5 sm:px-20'>
                <Swiper pagination={{clickable: true}} modules={[Pagination]} className="mySwiper w-[30rem]" centeredSlides={true} >
                        <SwiperSlide>
                            <SectionCard 
                                title='OIL CHANGES'
                                description='Vehicle Maintenance is extremely important and the easiest thing a vehicle owner can do is get the oil changed.'
                                topDown={true}
                                image='https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SectionCard 
                                title='OIL CHANGES'
                                description='Vehicle Maintenance is extremely important and the easiest thing a vehicle owner can do is get the oil changed.'
                                topDown={true}
                                image='https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SectionCard 
                                title='OIL CHANGES'
                                description='Vehicle Maintenance is extremely important and the easiest thing a vehicle owner can do is get the oil changed.'
                                topDown={true}
                                image='https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            />
                        </SwiperSlide>
                </Swiper>
           </div>

        </>
    )
}