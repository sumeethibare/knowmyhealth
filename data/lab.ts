// src/data/lab.ts
import BloodTest from '/public/images/labtests/bloodtest.png';
import UrineTest from '/public/images/labtests/urine tests.jpg';
import { StaticImageData } from 'next/image';

export type LabTest = {
  id: string; // Ensure id is a string
  name: string;
  address: string;
  image: string | StaticImageData;
  priceList: { [key: string]: number };
};

export const tests: LabTest[] = [
  {
    id: 'blood-test', // Unique string ID
    name: 'Blood Test',
    address: 'Bangalore',
    image: BloodTest,
    priceList: {
      'Hemoglobin': 150,
      'WBC Count': 200,
    },
  },
  {
    id: 'urine-test', // Unique string ID
    name: 'Urine Test',
    address: 'Bangalore',
    image: UrineTest,
    priceList: {
      'Protein Levels': 300,
    },
  },
];
