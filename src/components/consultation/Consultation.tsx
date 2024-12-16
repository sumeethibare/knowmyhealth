import Image from 'next/image'
import React from 'react'
import a from '/public/images/appointment/clinic.svg'
import b from '/public/images/appointment/online.svg'

function Consultation() {
    return (
        <div className='py-10'>
            <p className='text-center font-semibold text-xl'>Mode Of Consultation</p>
            <div className='flex items-center justify-evenly lg:flex-row flex-col'>

                <a href='/appointments/clinic' className='hover:shadow-2xl hover:duration-300 hover:rounded-xl duration-300 lg:hover:scale-105'>
                    <Image src={b} alt='offline' />
                    <p className='text-center font-medium text-lg py-4'>Online Consultation</p>
                </a>

                <a href='/appointments/online' className='hover:shadow-2xl hover:duration-300 hover:rounded-xl duration-300 lg:hover:scale-105'>
                    <Image src={a} alt='online' />
                    <p className='text-center font-medium text-lg py-4'>In-Clinic Consultation</p>
                </a>

            </div>
        </div>
    )
}

export default Consultation