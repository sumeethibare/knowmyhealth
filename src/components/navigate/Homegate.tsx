import Image from 'next/image';
import React from 'react';

const menuItems = [
  { href: '/diagnostics', image: '/images/Homegate/4.svg', label: 'Diagnostics' },
  { href: '/medicine', image: '/images/Homegate/5.svg', label: 'Medicines' },
  // { href: '/appointments', image: '/images/Homegate/2.svg', label: 'Book Appointment' },
  { href: '/appointments', image: '/images/Homegate/3.svg', label: 'Consultations' },
  { href: '/surgery', image: '/images/Homegate/6.svg', label: 'Surgery' },
  { href: '/dental', image: '/images/Homegate/1.svg', label: 'Dental' },
  { href: '/lab', image: '/images/Homegate/4.svg', label: 'Lab Tests' },
];

function Homegate() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-4 py-10">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 py-3 px-2 flex flex-col items-center text-center"
          >
            <a href={item.href} className="flex flex-col justify-center text-center items-center lg:hover:px-4 lg:hover:scale-105 hover:duration-300 duration-300 transition-all">
              <Image src={item.image} alt={item.label} width={40} height={40} />
              <span className="mt-2 text-xs">{item.label}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homegate;
