'use client';

import { useState, useEffect } from 'react';

type DiagnosticTest = {
  name: string;
  price: string;
  address: string;
  image: string;
  time: string;
};

const DiagnosticsPage = () => {
  const [selectedTest, setSelectedTest] = useState<DiagnosticTest | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  const tests: DiagnosticTest[] = [
    { name: 'MRI', price: '₹3000', address: 'Bangalore, Center A', image: '/images/mri.png', time: '10:00 AM' },
    { name: 'CT Scan', price: '₹2500', address: 'Bangalore, Center B', image: '/images/ct-scan.png', time: '11:00 AM' },
    { name: 'Blood Test', price: '₹500', address: 'Bangalore, Center C', image: '/images/blood-test.png', time: '9:00 AM' },
    { name: 'X-Ray', price: '₹800', address: 'Bangalore, Center D', image: '/images/x-ray.png', time: '1:00 PM' },
    { name: 'Ultrasound', price: '₹1200', address: 'Bangalore, Center E', image: '/images/ultrasound.png', time: '2:00 PM' },
    { name: 'ECG', price: '₹700', address: 'Bangalore, Center F', image: '/images/ecg.png', time: '3:00 PM' },
    { name: 'Echocardiogram', price: '₹2000', address: 'Bangalore, Center G', image: '/images/echocardiogram.png', time: '4:00 PM' },
  ];

  const filteredTests = tests.filter((test) => {
    return (
      test.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      test.address.toLowerCase().includes(locationQuery.toLowerCase())
    );
  });

  // Handle booking redirection using window location
  const handleBooking = () => {
    if (selectedTest) {
      localStorage.setItem('selectedTest', JSON.stringify(selectedTest)); // Store selected test in localStorage
      window.location.href = '/payment'; // Redirect to payment page
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Search Diagnostics"
          className="input input-bordered w-full max-w-xs mr-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="input input-bordered w-full max-w-xs"
          value={locationQuery}
          onChange={(e) => setLocationQuery(e.target.value)}
        />
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">Diagnostics Tests</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTests.map((test, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedTest(test)}
          >
            <figure>
              <img src={test.image} alt={test.name} className="h-40 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{test.name}</h2>
              <p className="text-gray-600">Price: {test.price}</p>
              <p className="text-gray-600">Time: {test.time}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedTest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={selectedTest.image}
                alt={selectedTest.name}
                className="w-full md:w-1/2 object-cover rounded-md"
              />
              <div>
                <h2 className="text-2xl font-bold">{selectedTest.name}</h2>
                <p className="mt-2 text-gray-600">{selectedTest.address}</p>
                <p className="mt-2 text-lg font-semibold">Price: {selectedTest.price}</p>
                <p className="mt-2 text-gray-500">Time: {selectedTest.time}</p>
              </div>
            </div>
            <button
              className="mt-4 btn btn-primary w-full"
              onClick={handleBooking}
            >
              Book Now
            </button>
            <button
              className="mt-2 btn btn-outline w-full"
              onClick={() => setSelectedTest(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosticsPage;
