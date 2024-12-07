import Image from 'next/image'
import React from 'react'
import a from '/public/images/medicine/1.png'
import c from '/public/images/medicine/3.png'
import e from '/public/images/medicine/5.png'
import f from '/public/images/medicine/6.png'
import Homegate from '@/components/navigate/Homegate'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
function page() {
    return (
        <>
            <Homegate />
            {/* the medicine card */}
            <div className='py-10 p-4 max-w-7xl mx-auto'>
                <div>
                    <p className='text-3xl font-semibold p-10 text-zinc-500'>choose Medicines</p>
                </div>
                <div className='grid lg:grid-cols-4 gap-4'>
                    <div className='bg-zinc-50 card-body rounded-3xl'>
                        <Image src={a} alt='medicine' />
                        <p className='card-title'>Fever Medicine Tablet (PTECH-650),</p>
                        <div className='items-center justify-center'>
                            <p>Rs.300</p>

                            <div className='flex items-center justify-between'>
                                <div className='flex gap-2 items-center'>
                                    <a className='btn btn-sm btn-circle'> <PlusCircleIcon className='size-4' /></a>
                                    <p>Quantity</p>
                                    <a className='btn btn-sm btn-circle'> <MinusCircleIcon className='size-4' /></a>
                                </div>

                                <a className='btn bg-cyan-700 text-white rounded-xl'>Buy</a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-zinc-50 card-body rounded-3xl'>
                        <Image src={c} alt='medicine' />
                        <p className='card-title'>Enterogermina Probiotic Supplement</p>
                        <div className='items-center justify-center'>
                            <p>Rs.300</p>

                            <div className='flex items-center justify-between'>
                                <div className='flex gap-2 items-center'>
                                    <a className='btn btn-sm btn-circle'> <PlusCircleIcon className='size-4' /></a>
                                    <p>Quantity</p>
                                    <a className='btn btn-sm btn-circle'> <MinusCircleIcon className='size-4' /></a>
                                </div>

                                <a className='btn bg-cyan-700 text-white rounded-xl'>Buy</a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-zinc-50 card-body rounded-3xl'>
                        <Image src={e} alt='medicine' />
                        <p className='card-title'>Enterogermina Probiotic Supplement</p>
                        <div className='items-center justify-center'>
                            <p>Rs.300</p>

                            <div className='flex items-center justify-between'>
                                <div className='flex gap-2 items-center'>
                                    <a className='btn btn-sm btn-circle'> <PlusCircleIcon className='size-4' /></a>
                                    <p>Quantity</p>
                                    <a className='btn btn-sm btn-circle'> <MinusCircleIcon className='size-4' /></a>
                                </div>

                                <a className='btn bg-cyan-700 text-white rounded-xl'>Buy</a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-zinc-50 card-body rounded-3xl'>
                        <Image src={f} alt='medicine' />
                        <p className='card-title'>Enterogermina Probiotic Supplement</p>
                        <div className='items-center justify-center'>
                            <p>Rs.300</p>

                            <div className='flex items-center justify-between'>
                                <div className='flex gap-2 items-center'>
                                    <a className='btn btn-sm btn-circle'> <PlusCircleIcon className='size-4' /></a>
                                    <p>Quantity</p>
                                    <a className='btn btn-sm btn-circle'> <MinusCircleIcon className='size-4' /></a>
                                </div>

                                <a className='btn bg-cyan-700 text-white rounded-xl'>Buy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page