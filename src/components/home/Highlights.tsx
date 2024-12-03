import Image from "next/image";
import Docone from '/public/images/docone.png';
import Doctwo from '/public/images/doctwo.png'
import Docthree from '/public/images/docthree.png'

const highlighting = [
    {
        id: 1,
        name: 'Find Doctors Near You',
        sub:'get confirmed appointments',
        href: '#',
        imageSrc: Docone,
        imageAlt: "Find Doctors Near You",
    },
    {
        id: 2,
        name: 'Surgeries',
        sub:'safe & trusted surgery centers',
        href: '#',
        imageSrc: Doctwo,
        imageAlt: "Find Doctors Near You",
    },
    {
        id: 3,
        name: 'Online Consultation',
        sub:'get instant treatment',
        href: '#',
        imageSrc: Docthree,
        imageAlt: "Find Doctors Near You",
    },
];

export default function Highlights() {
    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
                   <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Consult Top Doctors for any Health Concern</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {highlighting.map((list) => (
                    <div key={list.id} className="group relative">
                        <Image
                            alt={list.imageAlt}
                            src={list.imageSrc}
                            width={300}
                            height={300}
                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="font-medium text-gray-700">
                                    <a href={list.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {list.name}
                                    </a>
                                </h3>
                                <p className="text-sm">{list.sub}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
