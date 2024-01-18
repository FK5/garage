import {FC} from 'react';
import ServiceCard from '@/components/ServiceCard'

const Services: FC = () => {

    const serviceCardsTexts = [
        {title: 'ENGINES', description: 'We use state-of-the-art scan tool equipment to perform engine diagnostics and repair.', imageName: 'engine.jpg'},
        {title: 'TRANSMISSIONS', description: 'We diagnose and repair all types of transmissions if repairable.', imageName: 'transmission.jpg'},
        {title: 'SUSPENSION SYSTEMS', description: 'We repair and change all types of suspensions and its mechanism', imageName: 'beach-rover.jpg'},
        {title: 'ELECTRICAL SYSTEMS', description: 'We diagnose, check and repair electrical circuits in all cars.', imageName: 'electrical.jpg'},
        {title: 'DIAGNOSTIC', description: 'Our certified technicians use the lastest diagnostic equipment to service and repair yout vehicles.', imageName: 'diagnostic.jpg'},
        {title: 'PAINT JOBS', description: 'We use the best products and tools to give a mirror effect to your car.', imageName: 'red-rover.jpg'},
    ]

    const serviceCard = (title:string, description:string, topDown: boolean, image:string) => (
        <div className='basis-[31.3%]'>
            <ServiceCard 
                title={title}
                description={description}
                topDown={topDown}
                image={image}
            /> 
        </div>
    )

    return (
        <div className='flex flex-col bg-white px-5 sm:px-20 sm:pt-20 pb-20'>

            <div className='flex flex-wrap gap-10'>
                {serviceCardsTexts.map((element, index)=> serviceCard( element.title, element.description, index % 2 == 0, element.imageName))}
            </div>

        </div>
    )
}

export default Services