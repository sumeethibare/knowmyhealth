import Image from 'next/image';
import React from 'react';
import promoone from '/public/images/homefeatures/promoone.png';
import promotwo from '/public/images/homefeatures/promotwo.png';
import promothree from '/public/images/homefeatures/promothree.png';

const PromotionOne = () => {
    const images = [
        { src: promoone, alt: 'Promo One' },
        { src: promotwo, alt: 'Promo Two' },
        { src: promothree, alt: 'Promo Three' },
    ];

    return (
        <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto py-16 border-blue-200 border-t-2">
            <div className="w-full p-2 md:w-2/6 h-80 bg-zinc-200 text-primary-foreground rounded-full mb-4 md:mb-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-cyan-500">Give the care your family deserves</h1>
                <p className='text-medium pb-2'>Unlimited Consultations with top Doctors for 6 family members in 22+ specialities and 16 languages</p>
                <button className="px-6 py-2 bg-zinc-800 text-white rounded-xl hover:bg-primary-dark transition-all">
                    Get Started
                </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center space-y-28 lg:space-y-0">
                {images.map((image, index) => (
                    <div key={index} className="h-80 p-4">
                        <Image
                            src={image.src}
                            // layout="fill"
                            objectFit="cover"
                            alt={image.alt}
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PromotionOne;
