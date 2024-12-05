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
        <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto py-10">
            {/* Circle with centered text and button */}
            <div className="w-full p-2 md:w-2/6 h-80 bg-zinc-50 text-primary-foreground rounded-full mb-8 md:mb-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-xl font-semibold mb-4">Give the care your family deserves</h1>
                <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all">
                    Get Started
                </button>
            </div>

            {/* Feature Cards */}
            <div className="md:ml-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
                {images.map((image, index) => (
                    <div key={index} className="h-80">
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
