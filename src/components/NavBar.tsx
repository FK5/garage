'use client'

import { useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,

    XMarkIcon,
} from '@heroicons/react/24/outline'

import { redirect } from 'next/navigation'

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const homeClickHandle = () => {
        console.log(window.location.pathname);
        if (window.location.pathname !== '/') {
            redirect('')
        } else {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }
    }

    const navBarItemss  = [
        {itemName: 'HOME', onClickHandle: homeClickHandle},
        {itemName: 'SERVICES', onClickHandle: () => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }},
        {itemName: 'VEHICLES', onClickHandle: () => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }},
        {itemName: 'ABOUT', onClickHandle: () => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }},
        {itemName: 'SHOP', onClickHandle: () => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }},
        {itemName: 'SPECIALS', onClickHandle: () => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }},
        {itemName: 'CONTACT', onClickHandle: () => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }},
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
                        {navBarItemss.map((item, index) => {
                            return <a key={index} className='hover:font-bold hover:cursor-pointer hover:text-red-500' onClick={item.onClickHandle}>{item.itemName}</a>
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