import Image from 'next/image';
import React from 'react';
import promoone from '@/public/images/homefeatures/promoone.png';
import promotwo from '@/public/images/homefeatures/promotwo.png';
import promothree from '@/public/images/homefeatures/promothree.png';

const PromotionOne = () => {
    const images = [
        { src: promoone, alt: 'Promo One' },
        { src: promotwo, alt: 'Promo Two' },
        { src: promothree, alt: 'Promo Three' },
    ];

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-0 lg:px-8">
        
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">

                <div className="w-full p-2 md:w-1/3 aspect-square bg-zinc-200 text-primary-foreground rounded-full flex flex-col items-center justify-center text-center mx-auto">
                    <h1 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-cyan-500">
                        Give the care your family deserves
                    </h1>
                    <p className="text-medium pb-2">
                        Unlimited Consultations with top Doctors for 6 family members in 22+ specialities and 16 languages
                    </p>
                    <button className="px-6 py-2 bg-zinc-800 text-white rounded-xl hover:bg-primary-dark transition-all">
                        Get Started
                    </button>
                </div>

                <div className="flex justify-center items-center lg:flex-row flex-col gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="group relative">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={3000}
                                height={3000}
                                className="w-full rounded-md group-hover:opacity-75 aspect-auto lg:h-80"
                            />
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default PromotionOne;
