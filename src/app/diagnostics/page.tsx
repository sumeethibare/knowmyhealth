'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Homegate from '@/components/navigate/Homegate';
import { tests, DiagnosticTest } from './data'; // Import the data
import { motion } from 'framer-motion';

const DiagnosticsPage = () => {
  const [selectedTest, setSelectedTest] = useState<DiagnosticTest | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPrice, setSelectedPrice] = useState<number | string>(''); // Stores selected price

  const modalRef = useRef<HTMLDivElement>(null); // Reference to the modal container

  const filteredTests = tests.filter((test) => {
    return (
      test.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      test.address.toLowerCase().includes(locationQuery.toLowerCase())
    );
  });

  const handleBooking = () => {
    if (selectedTest && selectedPrice) {
      // Store selected test, price, scan type, and date in localStorage
      localStorage.setItem('selectedTest', JSON.stringify(selectedTest));
      localStorage.setItem('selectedPrice', JSON.stringify(selectedPrice));
      const selectedScanType = Object.keys(selectedTest.priceList).find(
        (key) => selectedTest.priceList[key] === selectedPrice
      );
      localStorage.setItem('selectedScanType', JSON.stringify(selectedScanType)); // Store the scan type
      localStorage.setItem('selectedDate', JSON.stringify(selectedDate)); // Store the date
      window.location.href = '/payment'; // Redirect to the payment page
    }
  };

  // Disable background scroll when modal is open
  useEffect(() => {
    if (selectedTest) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = ''; // Cleanup on unmount
    };
  }, [selectedTest]);

  // Close the modal when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedTest(null); // Close the modal if clicked outside
      }
    };

    // Add event listener for clicks outside the modal
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Homegate />
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
            disabled
            type="text"
            placeholder="Bangalore"
            className="input input-bordered w-full max-w-xs"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredTests.map((test, index) => (
            <div
              key={index}
              className="card hover:duration-300 duration-150 bg-gray-50 hover:shadow-lg rounded-xl cursor-pointer"
              onClick={() => setSelectedTest(test)}
            >
              <figure>
                <Image
                  src={test.image}
                  alt={test.name}
                  width={400}
                  height={200}
                  className="h-40 object-cover w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{test.name}</h2>
              </div>
            </div>
          ))}
        </div>

        {selectedTest && (
          <div
            id="modal"
            className="fixed inset-0 bg-black bg-opacity-50 flex lg:items-center items-end lg:justify-end justify-center z-50 modal-anim"
          >
            <div
              ref={modalRef}
              className="bg-white p-6 rounded-none shadow-lg max-w-lg w-full lg:h-screen lg:w-4/12 lg:right-0 lg:top-0 lg:justify-between lg:flex lg:flex-col"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <Image
                  src={selectedTest.image}
                  alt={selectedTest.name}
                  width={500}
                  height={300}
                  className="w-full md:w-1/2 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-2xl font-semibold">{selectedTest.name}</h2>
                  <p className="mt-2 text-gray-600">{selectedTest.address}</p>

                  <div className="mt-4">
                    <p className="py-2">Select Test</p>
                    <div className="dropdown">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1"
                      >
                        {selectedPrice
                          ? Object.keys(selectedTest.priceList).find(
                              (key) =>
                                selectedTest.priceList[key].toString() ===
                                selectedPrice.toString()
                            ) + ` - ₹${selectedPrice}`
                          : 'Select Type Of Test'}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow overflow-y-scroll" // Enables dropdown scrolling
                      >
                        {Object.entries(selectedTest.priceList).map(
                          ([label, price]) => (
                            <li
                              key={label}
                              onClick={() => setSelectedPrice(price)}
                              className="cursor-pointer"
                            >
                              <a>
                                {label} - ₹{price}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="py-2">Select Date for {selectedTest.name}</p>
                    <input
                      type="date"
                      className="input input-bordered w-full"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
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
          </div>
        )}
      </div>
    </>
  );
};

export default DiagnosticsPage;
