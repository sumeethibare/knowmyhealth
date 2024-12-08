// data.ts
export type DiagnosticTest = {
    name: string;
    address: string;
    image: string;
    priceList: { [key: string]: number }; // Price list integrated directly into the data
  };
  
  export const tests: DiagnosticTest[] = [
    {
        name: 'Blood Test',
        address: 'Bangalore',
        image: '/images/diagnostics/mri.jpg',
        priceList: {
          'MRI BRAIN': 7250,
          'MR VENOGRAM': 5000,
        }
      },
      {
        name: 'Urine Test',
        address: 'Bangalore',
        image: '/images/diagnostics/ct.jpg',
        priceList: {
          'CT-BRAIN': 2900,
        }
      },
  ];
  