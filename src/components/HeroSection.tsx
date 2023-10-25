import { ArrowRightIcon} from '@heroicons/react/24/outline'

export default function HeroSection() {
    return (
        <>
            <div className='animate-fade-down bg-[url(/heroImage.jpg)] bg-cover bg-[center_bottom] bg-no-repeat h-[38rem] pl-5 sm:pl-20'>
                <p className='pt-36  w-1/2 text-3xl sm:text-6xl font-bold text-white leading-none'>KEEPING YOU ON THE ROAD WITH SERVICE YOU CAN TRUST</p>
                <div className='bg-black h-10 w-fit mt-10 text-white px-5 py-8 flex items-center'> <p className='font-bold text-sm'>EXPLORE OUR SERVICES</p> <ArrowRightIcon className='h-4 w-4 ml-4'/></div>
            </div>
        </>
    )
}