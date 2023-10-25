import { PhoneIcon } from '@heroicons/react/20/solid'
import { SiFacebook } from 'react-icons/si';
import { SiX } from 'react-icons/si'
import { SiTiktok } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'

export default function FooterSection() {

    const lineBreak = (
        <>
            <div className="h-[10px]" />
            <div className="bg-white w-full h-[0.3px] m-0 p-0 border-0 border-black"/>
            <div className="h-[4px]" />
        </>
    )
    
    return (
        <>
            <div className='flex flex-col items-center justify-center bg-stone-900 h-[38rem] px-5 sm:px-20'>
                <p className="text-white text-3xl w-1/2 text-center font-bold mb-8">IF YOU HAVE ANY QUESTIONS, FEEL FREE TO CONTACT US</p>
                
                {lineBreak}

                <div className="flex justify-center items-center w-full mt-8 mb-8">
                    <PhoneIcon className='h-[6rem] text-white mr-8'/>
                    <div className='flex flex-col'>
                        <p className="text-white text-5xl text-center font-bold mb-2">961 76 94 95 98</p>
                        <p className="text-white text-5xl text-center font-bold">961 70 81 36 66</p>
                    </div>
                </div>

                {lineBreak}

                <div className="flex justify-between items-center w-full mt-8 mb-8">
                    <div className='flex flex-col'>
                        <p className="text-white mb-2 text-sm">NEW JNAH, 1298 ALI MOKDAD</p>
                        <p className='text-white underline text-sm'>GET DIRECTION</p>
                    </div>
                    <div className='flex gap-6'>
                        <SiFacebook size={30} color="#FFF"/>
                        <SiX size={30} color="#FFF"/>
                        <SiInstagram size={30} color="#FFF"/>
                        <SiTiktok size={30} color="#FFF"/>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-white mb-2 text-sm text-right">MON - FRI: 8:30 AM - 6:00PM</p>
                        <p className="text-white mb-2 text-sm text-right">SAT: 8:30 AM - 2:00 PM</p>
                    </div>
                </div>
                
                {lineBreak}

                <div className='flex justify-between items-center w-full mt-8'>
                    <div className='flex gap-4 text-white'>
                        <p className='text-sm'>FAQ</p>
                        <p className='text-sm'>REVIEWS</p>
                        <p className='text-sm'>CONTACT</p>
                    </div>

                    <div className='flex text-white'>
                        <p className='text-sm'>&copy;2023 RoadRovers by Luca</p>
                    </div>

                </div>

            </div>
        </>
    )
}