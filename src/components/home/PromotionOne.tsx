import React from 'react';

type WidgetProps = {
    title: string;
    description: string;
};

const PromotionOne: React.FC = () => {
    const features: WidgetProps[] = [
        {
            title: "Unlimited Free Consultations",
            description: "Get unlimited free consultations with all doctors 24x7",
        },
        {
            title: "Free For All Health Problems",
            description: "Consult with any doctor from 18 departments at any time",
        },
        {
            title: "Free For Full Family",
            description: "Free consultations for up to 6 family members",
        },
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
            <div className="md:ml-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group bg-white p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col justify-between relative"
                    >
                        <h3 className="text-2xl font-semibold text-secondary mb-4">{feature.title}</h3>
                        <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>

                        {/* Button */}
                        <div className="absolute bottom-6 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="px-4 py-2 ml-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PromotionOne;
