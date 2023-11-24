'use client'

import {FC, useState} from 'react';
import TextInput from '@/components/TextInput'

import { ArrowRightIcon} from '@heroicons/react/24/outline'

const AppointmentSection: FC = () => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [makeModel, setMakeModel] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [caseDescription, setCaseDescription] = useState<string>('');

    return (
        <>
            <div className='sm:flex flex-col bg-white px-5 sm:px-20 sm:pt-20 pb-20 hidden'>

                <p className='font-bold text-6xl w-1/3 mb-24'>GET FREE APPOINTMENT</p>
                <div className='flex mb-20'>
                    <div className='w-4/12 pr-12'>
                        <TextInput label='Name' value={name} onInputChange={setName} />
                    </div>
                    <div className='w-4/12 pr-12'>
                        <TextInput label='Phone' value={phone} onInputChange={setPhone} />
                    </div>
                    <div className='w-5/12'>
                        <TextInput label='Email' value={email} onInputChange={setEmail} />
                    </div>
                </div>

                <div className='flex mb-20'>
                    <div className='w-7/12 pr-12'>
                        <TextInput label='Vehicle Make/Model and Year' value={makeModel} onInputChange={setMakeModel} />
                    </div>
                    <div className='w-4/12 pr-12'>
                        <TextInput label='Date' value={date} onInputChange={setDate} type='date'/>
                    </div>
                    <div className='w-4/12'>
                        <TextInput label='Time' value={time} onInputChange={setTime} type='time'/>
                    </div>
                </div>

                <div className='flex mb-20'>
                    <div className='w-full'>
                        <TextInput label='Case Descripition' value={caseDescription} onInputChange={setCaseDescription} />
                    </div>
                </div>

                <div className='bg-black w-36 h-10 text-white px-5 py-8 flex jsutify-center items-center hover:cursor-pointer'>
                    <p className='font-bold text-sm'>SEND</p>
                    <ArrowRightIcon className='h-4 w-4 ml-4'/>
                </div>
            </div>
            <div className='sm:hidden flex flex-col bg-white px-5 sm:px-20'>
                <p className='font-bold text-4xl mb-8'>GET FREE APPOINTMENT</p>
                <div className='mb-4'>
                    <TextInput label='Name' value={name} onInputChange={setName} size='small' />
                </div>
                <div className='mb-4'>
                    <TextInput label='Phone' value={phone} onInputChange={setPhone} size='small' />
                </div>
                <div className='mb-4'>
                    <TextInput label='Email' value={email} onInputChange={setEmail} size='small' />
                </div>
                <div className='mb-8'>
                    <TextInput label='Vehicle Make/Model and Year' value={makeModel} onInputChange={setMakeModel} size='small' />
                </div>
                <div className='mb-8'>
                    <TextInput label='Date' value={date} onInputChange={setDate} type='date' size='small'/>
                </div>
                <div className='mb-4'>
                    <TextInput label='Time' value={time} onInputChange={setTime} type='time' size='small'/>
                </div>
                <div className='mb-4'>
                    <TextInput label='Case Descripition' value={caseDescription} onInputChange={setCaseDescription} size='small' />
                </div>

                <div className='bg-black w-1/3 mx-auto h-6 text-white px-5 py-6 flex jsutify-center items-center hover:cursor-pointer'>
                    <p className='font-bold text-sm'>SEND</p>
                    <ArrowRightIcon className='h-4 w-4 ml-4'/>
                </div>

            </div>
        </>
    )
}

export default AppointmentSection