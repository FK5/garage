import { PhoneIcon } from '@heroicons/react/20/solid'
import { CalendarIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/outline'

export default function InfoBar() {
    return (
        <>
            <div className='bg-white sm:flex flex-row border-b-2 border-black h-14 hidden'>
                <a className='w-20 border-r-2 border-black hidden sm:block'></a>
                <a className='w-1/3 text-center border-r-2 border-black flex items-center justify-center'><PhoneIcon className='h-4 w-4 mr-2'/>CALL US NOW +961 76 94 95 98</a>
                <a className='w-1/3 text-center border-r-2 border-black flex items-center justify-center'><CalendarIcon className='h-4 w-4 mr-2'/>GET A FREE APPOINTMENT</a>
                <a className='w-1/3 text-center border-r-2 border-black flex items-center justify-center text-red-500 hover:font-bold hover:cursor-pointer'><MapPinIcon className='h-4 w-4 mr-2'/>FIND US ON MAP</a>
                <a className='w-20 hidden sm:block'></a>
            </div>
            <div className='bg-white flex flex-col items-center justify-center block sm:hidden w-full'>
                <a className='text-center flex py-1 border-b-2 border-black w-full flex items-center justify-center'><PhoneIcon className='h-4 w-4 mr-2'/><span>CALL US NOW +961 76 94 95 98 </span></a>
                <a className='text-center flex py-1 border-b-2 border-black w-full flex items-center justify-center'><CalendarIcon className='h-4 w-4 mr-2'/><span>GET A FREE APPOINTMENT</span></a>
                <a className='text-center flex py-1 border-b-2 border-black w-full flex items-center justify-center text-red-500'><MapPinIcon className='h-4 w-4 mr-2'/><span>FIND US ON MAP</span></a>
            </div>
        </>
    )
}