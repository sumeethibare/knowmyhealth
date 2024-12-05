
import Image from "next/image";
import Prop1 from '/public/images/problems/prop1.png';
import Prop2 from '/public/images/problems/prop2.png'
import Prop3 from '/public/images/problems/prop3.png'
import Prop4 from '/public/images/problems/prop4.png'

const Propone = [
    {
        id: 1,
        sub: 'depression or anxiety',
        href: '#',
        imageSrc: Prop1,
        imageAlt: "Find Doctors Near You",
    },
    {
        id: 2,
        sub: 'cold, cough & fever',
        href: '#',
        imageSrc: Prop2,
        imageAlt: "Find Doctors Near You",
    },
    {
        id: 3,
        sub: 'period doubts & pregnancy',
        href: '#',
        imageSrc: Prop3,
        imageAlt: "Find Doctors Near You",
    },
    {
        id: 3,
        sub: 'Acne, Pimple & Skin issues',
        href: '#',
        imageSrc: Prop4,
        imageAlt: "Find Doctors Near You",
    },
];

export default function PropOne() {
    return (
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 mt-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
                {Propone.map((list) => (
                    <div
                        key={list.id}
                        className="group relative bg-zinc-50 flex flex-col items-center justify-center rounded-md p-4"
                    >
                        <Image
                            alt={list.imageAlt}
                            src={list.imageSrc}
                            width={3000}
                            height={3000}
                            className="w-full rounded-md group-hover:opacity-75 lg:aspect-auto lg:h-40 lg:w-40"
                        />
                        <div className="mt-4 text-center">
                            <p className="text-sm">{list.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
