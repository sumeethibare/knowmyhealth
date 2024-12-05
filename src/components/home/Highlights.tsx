import Image from "next/image";
import home1 from '/public/images/homefeatures/docone.png';
import home2 from '/public/images/homefeatures/doctwo.png'
import home3 from '/public/images/homefeatures/docthree.png'

const highlighting = [
    {
        id: 1,
        name: 'Find Doctors Near You',
        sub:'get confirmed appointments',
        href: '#',
        imageSrc: home1,
        imageAlt: "Find Doctors Near You",
    },
    {
        id: 2,
        name: 'Surgeries',
        sub:'safe & trusted surgery centers',
        href: '#',
        imageSrc: home2,
        imageAlt: "Find Doctors Near You",
    },
    {
        id: 3,
        name: 'Consultation',
        sub:'get instant treatment',
        href: '#',
        imageSrc: home3,
        imageAlt: "Find Doctors Near You",
    },
];

export default function Highlights() {
    return (
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {highlighting.map((list) => (
                    <div key={list.id} className="group relative">
                        <Image
                            alt={list.imageAlt}
                            src={list.imageSrc}
                            width={3000}
                            height={3000}
                            className="w-full rounded-md group-hover:opacity-75 aspect-auto lg:h-80"
                        />
                        {/* <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="font-medium text-gray-700">
                                    <a href={list.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {list.name}
                                    </a>
                                </h3>
                                <p className="text-sm">{list.sub}</p>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
