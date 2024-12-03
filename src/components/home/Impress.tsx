import Image from 'next/image';
import HI from '/public/images/homeimage.png'

const Impress = () => {
    return (
        <div className="py-12 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                        AI powered consumer <span className='text-green-500 font-serif italic font-normal'>health</span> Platform
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Introducing our cutting-edge SecureCloud Backup Solution, the ultimate safeguard for your critical data.
                        In today's rapidly evolving IT landscape, data security and disaster recovery have never been more
                        crucial.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                        >
                            Get Started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            About Us <span>→</span>
                        </a>
                    </div>
                </div>
                <div className="mt-10 flow-root sm:mt-20">
                    <div className="-m-2 rounded-3xl bg-gray-100 p-2 ring-1 ring-inset ring-gray-300 lg:-m-4 lg:rounded-3xl lg:p-2">
                        <Image
                            src={HI}
                            alt="Backup solution"
                            width={2432}
                            height={1442}
                            className="rounded-2xl shadow-2xl ring-1 ring-gray-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impress;
