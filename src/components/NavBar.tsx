'use client'

import { useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navBarItems = [
        'HOME',
        'SERVICES',
        'VEHICLES',
        'ABOUT',
        'SHOP',
        'SPECIALS',
        'CONTACT'
    ]

    return (
        <>
            <div className='flex justify-between items-center px-5 sm:px-20 bg-white h-20 sticky top-0 z-50'>
                <div>
                    <p className='text-3xl font-bold font-mono'>Road Rovers</p>
                </div>

                <div className="flex sm:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                
                <div className='hidden sm:flex'>
                    <div className='flex space-x-4'>
                        {navBarItems.map((item, index) => {
                            return <a key={index} className='hover:font-bold hover:cursor-pointer'>{item}</a>
                        })}
                    </div>
                </div>
            </div>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            {/* <Image className='h-8 w-auto' src={"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"} alt={"logo"} /> */}
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="space-y-2 py-6">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                Features
                            </a>
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                Marketplace
                            </a>
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                Company
                            </a>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}