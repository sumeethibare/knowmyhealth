"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { tests } from '../../../data/lab';
import Homegate from '@/components/navigate/Homegate';

const LabTestDetails = () => {
  const params = useParams();
  const testId = params?.test ?? '';

  const selectedTest = tests.find((test) => test.id === testId);

  if (!selectedTest) {
    return <p className="text-center mt-10">Test not found!</p>;
  }

  return (
    <>
      <Homegate />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-semibold mb-4">{selectedTest.name}</h1>

        <select className="select w-full max-w-xs my-4">
          <option disabled selected>{selectedTest.address}</option>
        </select>

        <div className='h-1/4 lg:w-1/4 '>
          <Image
            src={selectedTest.image}
            alt={selectedTest.name}
            width={500}
            height={300}
            className="w-full object-cover rounded-md mb-6"
          />
        </div>
        <h2 className="text-2xl font-medium mb-4 p-4">Choose The Test</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(selectedTest.priceList).map(([testName, price]) => (
            <div key={testName} className="bg-zinc-50 card-body p-4 card-hover-animation h-48 group hover:bg-sky-700 hover:text-stone-50">
              <h3 className="text-lg font-medium">{testName}</h3>
              <p>₹{price}</p>
              <div className="card-actions justify-end">
                <a href={`/payment?testName=${encodeURIComponent(testName)}&price=${price}`} className='btn'>book test</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LabTestDetails;
