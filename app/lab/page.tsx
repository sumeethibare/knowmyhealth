// src/app/lab/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { tests } from '../../data/lab';
import Homegate from '@/components/navigate/Homegate';

const LabPage = () => {
  return (
    <>
      <Homegate />
      <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <Link key={test.id} href={`/lab/${test.id}`}>
               <div className="card card-hover-animation rounded-none">
                <figure>
                  <Image
                    src={test.image}
                    alt={test.name}
                    width={400}
                    height={200}
                    className="h-40 object-cover w-full"
                  />
                </figure>
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{test.name}</h2>
                  <p className="text-gray-500">{test.address}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LabPage;
