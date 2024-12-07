import Image from 'next/image'
import React from 'react'
import dental from '/public/images/Homegate/1.svg'
import two from '/public/images/Homegate/2.svg'
import three from '/public/images/Homegate/3.svg'
import four from '/public/images/Homegate/4.svg'
import five from '/public/images/Homegate/5.svg'
import six from '/public/images/Homegate/6.svg'

function Homegate() {
    return (
        <div className='max-w-xl mx-auto'>
            <div className='flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 text-sm cursor-pointer py-10'>

                <div className='py-3 px-4 rounded-xl flex flex-col items-center text-center'>
                    <a href='/diagnostics' className='flex flex-col justify-center text-center items-center'>
                        <Image src={four} alt='image' />
                        <span>Diagnostics</span>
                    </a>
                </div>

                <div className='py-3 px-4 rounded-xl flex flex-col items-center text-center'>
                    <a href='/medicine' className='flex flex-col justify-center text-center items-center'>
                        <Image src={five} alt='image' className='flex flex-col justify-center text-center items-center' />
                        <span>Medicines</span>
                    </a>
                </div>

                <div className='py-3 px-4 rounded-xl flex flex-col items-center text-center'>
                    <a href='/appointments' className='flex flex-col justify-center text-center items-center'>
                        <Image src={two} alt='image'  className='flex flex-col justify-center text-center items-center'/>
                        <span>Book Appointment</span>
                    </a>
                </div>

                <div className='py-3 px-4 rounded-xl flex flex-col items-center text-center'>
                    <a href='/surgery' className='flex flex-col justify-center text-center items-center'>
                        <Image src={six} alt='image' className='flex flex-col justify-center text-center items-center' />
                        <span>Surgery</span>
                    </a>
                </div>

                <div className='py-3 px-4 rounded-xl flex flex-col items-center text-center'>
                    <a href='/surgery' className='flex flex-col justify-center text-center items-center'>
                        <Image src={three} alt='image' className='flex flex-col justify-center text-center items-center' />
                        <span>Talk To Doctor</span>
                    </a>
                </div>

                <div className='py-3 px-4 rounded-xl flex flex-col items-center text-center'>
                    <a href='/dental' className='flex flex-col justify-center text-center items-center'>
                        <Image src={dental} alt='image' className='flex flex-col justify-center text-center items-center' />
                        <span>Dental</span>
                    </a>
                </div>

                <div className='py-3 px-4 rounded-xl flex flex-col items-center text-center'>
                    <a href='/diagnostics' className='flex flex-col justify-center text-center items-center'>
                        <Image src={four} alt='image' />
                        <span>Lab Tests</span>
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Homegate;
