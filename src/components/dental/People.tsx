import a from '/public/images/diagnostics/docone.png'
import b from '/public/images/diagnostics/doctwo.png'
import c from '/public/images/diagnostics/docthree.png'
import d from '/public/images/diagnostics/docone.png'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
const people = [
    {
        name: 'Dr Leslie Alexander',
        role: 'MBBS, MS',
        imageUrl:
            d,
    },
    {
        name: 'Dr. pooja',
        role: 'MBBS, MS, Mch',
        imageUrl:
            a,
    },
    {
        name: 'Dr. Rani',
        role: 'MBBS, MS, Mch',
        imageUrl:
            b,
    },
    {
        name: 'Dr Rohini',
        role: 'MBBS, MS, Mch',
        imageUrl:
            c,
    },
    {
        name: 'Dr Sheetal',
        role: 'MBBS, MS, Mch',
        imageUrl:
            d,
    },
]

export default function People() {
    return (

        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-2 py-10">
            <label className="input input-bordered rounded-xl flex items-center gap-2">
                <input type="text" className="grow" placeholder="search the dental you want" />
                <MagnifyingGlassIcon className='size-5' />
            </label>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {people.map((person) => (
                    <li key={person.name}>
                        <div className="flex items-center gap-x-6">
                            <Image alt="image" src={person.imageUrl} className="size-32 rounded-2xl" />
                            <div>
                                <h3 className="text-2xl font-semibold tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-sm/6 font-semibold text-zinc-600">{person.role}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )
}
