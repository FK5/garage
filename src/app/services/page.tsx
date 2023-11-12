import {FC} from 'react';
import ServiceCard from '@/components/ServiceCard'

const Services: FC = () => {

    const serviceCardsTexts = [
        {title: 'ENGINES', description: 'We use state-of-the-art scan tool equipment to perform engine diagnostics and repair.'},
        {title: 'TRANSMISSIONS', description: 'We diagnose and repair all types of transmissions if repairable.'},
        {title: 'SUSPENSION SYSTEMS', description: 'We repair and change all types of suspensions and its mechanism'},
        {title: 'ELECTRICAL SYSTEMS', description: 'We diagnose, check and repair electrical circuits in all cars.'},
        {title: 'DIAGNOSTIC', description: 'Our certified technicians use the lastest diagnostic equipment to service and repair yout vehicles.'},
        {title: 'PAINT JOBS', description: 'We use the best products and tools to give a mirror effect to your car.'},
    ]

    const serviceCard = (title:string, description:string, topDown: boolean) => (
        <div className='basis-[31.3%]'>
            <ServiceCard 
                title={title}
                description={description}
                topDown={topDown}
                image='https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            /> 
        </div>
    )

    // const defaultImageURL: string = 'https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    return (
        <div className='flex flex-col bg-white px-5 sm:px-20 sm:pt-20 pb-20'>

            <div className='flex flex-wrap gap-10'>
                {serviceCardsTexts.map((element, index)=> serviceCard( element.title, element.description, index % 2 == 0))}
            </div>

        </div>
    )
}

export default Services