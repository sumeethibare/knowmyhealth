import Image from "next/image";
import Prop1 from '/public/images/problems/prop1.png';
import Prop2 from '/public/images/problems/prop2.png';
import Prop3 from '/public/images/problems/prop3.png';
import Prop4 from '/public/images/problems/prop4.png';

const Propone = [
    {
        id: 1,
        sub: 'Depression or anxiety',
        href: '#',
        imageSrc: Prop1,
        imageAlt: "Find Doctors Near You",
    },
    {
        id: 2,
        sub: 'Cold, cough & fever',
        href: '#',
        imageSrc: Prop2,
        imageAlt: "Find Doctors Near You",
    },
    {
        id: 3,
        sub: 'Period doubts & pregnancy',
        href: '#',
        imageSrc: Prop3,
        imageAlt: "Find Doctors Near You",
    },
    {
        id: 4,
        sub: 'Acne, Pimple & Skin issues',
        href: '#',
        imageSrc: Prop4,
        imageAlt: "Find Doctors Near You",
    },
    {
        id: 5,
        sub: 'Headaches & Migraines',
        href: '#',
        imageSrc: Prop1,
        imageAlt: "Find Doctors Near You",
    },
    {
        id: 6,
        sub: 'Diabetes & Thyroid',
        href: '#',
        imageSrc: Prop2,
        imageAlt: "Find Doctors Near You",
    },
];

export default function PropOne() {
    return (
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 mt-10">
            {/* Horizontal Scrolling Wrapper */}
            <div className="overflow-x-auto scrolly">
                <div className="flex gap-x-6">
                    {Propone.map((list) => (
                        <div
                            key={list.id}
                            className="group relative bg-zinc-50 rounded-xl flex flex-col items-center justify-center p-4 shrink-0 w-64"
                        >
                            <Image
                                alt={list.imageAlt}
                                src={list.imageSrc}
                                width={3000}
                                height={3000}
                                className="w-full rounded-xl group-hover:opacity-75 h-60 object-cover"
                            />
                            <div className="mt-4 text-center">
                                <p className="text-sm">{list.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
