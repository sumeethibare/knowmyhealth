import BloodTest from '/public/images/labtests/bloodtest.png'
import UrineTest from '/public/images/labtests/urine tests.jpg'
import { StaticImageData } from 'next/image'

export type DiagnosticTest = {
  name: string;
  address: string;
  image: string | StaticImageData;
  priceList: { [key: string]: number }; // Price list integrated directly into the data
};

export const tests: DiagnosticTest[] = [
  {
    name: 'Blood Test',
    address: 'Bangalore',
    image: BloodTest,
    priceList: {
      'MRI BRAIN': 7250,
      'MR VENOGRAM': 5000,
    }
  },
  {
    name: 'Urine Test',
    address: 'Bangalore',
    image: UrineTest,
    priceList: {
      'CT-BRAIN': 2900,
    }
  },
];
