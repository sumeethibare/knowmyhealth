"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { tests } from '../../../data/diagnostics';
import Homegate from '@/components/navigate/Homegate';

const TestDetails = () => {
  const params = useParams();
  const test = params?.test ?? '';

  const selectedTest = tests.find((t) => t.id === test);

  if (!selectedTest) {
    return <p className="text-center mt-10">Test not found!</p>;
  }

  return (
    <>
    <Homegate/>
      <div className="container mx-auto p-6">
        <div className='flex justify-between flex-col lg:flex-row items-start'>
          <div className='flex items-center gap-4'>
            <h1 className="text-3xl font-medium">{selectedTest.name}</h1>
            <p className=" text-2xl">{selectedTest.address}</p>
          </div>
          <div className='h-1/4 lg:w-1/4 '>
            <Image
              src={selectedTest.image}
              alt={selectedTest.name}
              width={1000}
              height={1000}
              className="w-full object-cover rounded-md mb-6"
            />
          </div>
        </div>
        <h2 className="text-2xl font-medium mb-4 p-4">Choose The Test</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(selectedTest.priceList).map(([testName, price]) => (
            <div key={testName} className="bg-zinc-50 card-body p-4 card-hover-animation">
              <h3 className="text-lg card-title">{testName}</h3>
              <p className="text-zinc-500">₹{price}</p>
              <div className="card-actions justify-end">
                <a href='/payment' className='btn btn-sm'>book test</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestDetails;
