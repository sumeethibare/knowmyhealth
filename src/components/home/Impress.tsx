import Image from 'next/image';
import I1 from '/public/images/homeimage.png'
import I2 from '/public/images/docone.png'
import I3 from '/public/images/doctwo.png'
import { ArrowRightIcon, MagnifyingGlassIcon, MapIcon } from '@heroicons/react/24/outline';

const Impress = () => {
    return (
        <div className="py-12 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">


                <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-lg">

                    <div className='lg:flex items-center justify-center lg:space-y-0 space-y-2 lg:space-x-4 py-6'>

                        <label className="input input-bordered flex items-center gap-2">
                            <MapIcon className='size-4' />
                            <input type="text" className="grow" placeholder="select location" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <MagnifyingGlassIcon className='size-4' />
                            <input type="text" className="grow" placeholder="Search" />
                        </label>

                    </div>
                </div>


                <div className='flex'>

                    <div className="carousel lg:w-4/6 h-72 lg:h-[28rem] rounded-box">
                        <div id="slide1" className="carousel-item relative w-full">
                            <Image
                                src={I1} width={700} height={700} alt='image'
                                className="w-full" />
                            <div className="absolute left-3 right-3 bottom-2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <Image
                                src={I2} width={700} height={700} alt='image'
                                className="w-full" />
                            <div className="absolute left-3 right-3 bottom-2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <Image
                                src={I3} width={700} height={700} alt='image'
                                className="w-full" />
                            <div className="absolute left-3 right-3 bottom-2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <Image
                                src={I1} width={700} height={700} alt='image'
                                className="w-full" />
                            <div className="absolute left-3 right-3 bottom-2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                    <div className='hidden lg:flex flex-col mx-4 p-4 w-1/3'>

                        <div className='flex items-center justify-between'>
                            <p className='text-xl'>top doctors in city</p>
                            <ArrowRightIcon className="size-4" />
                        </div>


                        <div className='w-full'>

                            <ul role="list" className="divide-y divide-gray-100">
                                <li className="flex justify-between gap-x-6 py-5">
                                    <div className="flex min-w-0 gap-x-4">
                                        <img className="size-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm/6 font-semibold text-gray-900">Leslie Alexander</p>
                                            <p className="mt-1 truncate text-xs/5 text-gray-500">leslie.alexander@kmy.com</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="flex justify-between gap-x-6 py-5">
                                    <div className="flex min-w-0 gap-x-4">
                                        <img className="size-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm/6 font-semibold text-gray-900">Rose Francis</p>
                                            <p className="mt-1 truncate text-xs/5 text-gray-500">rose.francis@kmy.com</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="flex justify-between gap-x-6 py-5">
                                    <div className="flex min-w-0 gap-x-4">
                                        <img className="size-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm/6 font-semibold text-gray-900">kate bishop</p>
                                            <p className="mt-1 truncate text-xs/5 text-gray-500">kate.bishop@kmy.com</p>
                                        </div>
                                    </div>
                                </li>


                            </ul>

                        </div>

                    </div>


                </div>

                <div className="mx-auto lg:mx-0 max-w-2xl lg:text-left lg:p-6 text-center">

                    <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                        AI powered consumer <span className='text-green-500 font-serif italic font-normal'>health</span> Platform
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Introducing our cutting-edge Solution, the ultimate safeguard for health and wellbeing.
                        In todays rapidly evolving health sector, we take the peoples health as a serious concern and help them.
                    </p>
                    <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                        <a
                            href="/profile"
                            className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                        >
                            Get Started
                        </a>
                        <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                            About Us <span>→</span>
                        </a>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Impress;
