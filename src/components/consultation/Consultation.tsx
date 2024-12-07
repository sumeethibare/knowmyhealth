import Image from 'next/image'
import React from 'react'
import a from '/public/images/appointment/clinic.svg'
import b from '/public/images/appointment/online.svg'

function Consultation() {
    return (
        <div className='py-10'>
            <p className='text-center font-semibold text-xl'>Consult Top Doctors</p>
            <div className='flex items-center justify-evenly'>
                <a href='/book'>
                    <Image src={a} alt='online' />
                    <p className='text-center font-medium text-lg'>In-Clinic Consultation</p>
                </a>

                <a href='/online'>
                    <Image src={b} alt='offline' />
                    <p className='text-center font-medium text-lg'>Online Consultation</p>
                </a>
            </div>
        </div>
    )
}

export default Consultation