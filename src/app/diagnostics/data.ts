// data.ts
export type DiagnosticTest = {
    name: string;
    address: string;
    image: string;
    priceList: { [key: string]: number }; // Price list integrated directly into the data
  };
  
  export const tests: DiagnosticTest[] = [
    {
        name: 'MRI',
        address: 'Bangalore',
        image: '/images/diagnostics/mri.jpg',
        priceList: {
          'MRI BRAIN': 7250,
          'MR VENOGRAM': 5000,
          'MRI SPINE EACH REGION': 7250,
          'MRI ANY JOINT': 7750,
          'MRI PNS': 7250,
          'MRI BREAST': 7250,
          'MRI ABDOMEN': 7750,
          'MRI PELVIS': 7750,
          'MRI ABDOMEN & PELVIS': 15500,
          'MRCP MR UROGRAPHY': 7250,
          'MR ANGIO (NON CONTRAST)': 5000,
          'MR ANGIO (CONTRAST)': 8000,
          'MR PERIPHERAL ANGIO (VENOUS PHASE)': 14000,
          'MRI WHOLE SPINE SCREENING': 15500,
          'MR PET WHOLE BODY': 25000,
          'MRI CONTRAST': 3000
        }
      },
      {
        name: 'CT Scan',
        address: 'Bangalore',
        image: '/images/diagnostics/ct.jpg',
        priceList: {
          'CT-BRAIN': 2900,
          'CT-PNS': 3400,
          'CT-NECK': 3900,
          'HRCT OF THORAX': 4900,
          'CT-ABDOMEN': 4400,
          'CT-PELVIS': 3500,
          'CT-KUB': 3900,
          'CT-HRCT TEMPORAL BONE (INNER EAR)': 4900,
          'CT-EXTREMITIES': 4900,
          'CT-3D': 5750,
          'CT-CONTRAST': 1500,
          'CT-GUIDED FNAC': 4500
        }
      },
      {
        name: 'Ultrasound / Doppler',
        address: 'Bangalore',
        image: '/images/diagnostics/ultrasound.jpg',
        priceList: {
          'U/S ROUTINE': 1500,
          'U/S PREGNANCY WITH DOPPLER': 4000,
          'SMALL PARTS': 2750,
          'U/S SONOMAMMO': 2750,
          'U/S TVS SCAN': 2000,
          'U/S 3D': 3500,
          'PINEL DOPPLER': 3000,
          'U/S GUIDED STUDY': 3500,
          'DOPPLER EACH REGION': 2750,
          'CAROTID DOPPLER': 2750,
          'ECHO': 1500
        }
      },
      {
        name: 'X-Ray',
        address: 'Bangalore',
        image: '/images/diagnostics/xray.jpg',
        priceList: {
          'X-RAY 1 VIEW': 350,
          'X-RAY 2 VIEWS': 500,
          'X-RAY ADDITIONAL VIEWS': 350,
          'X-RAY PROCEDURE WITH CONTRAST': 3000,
          'X-RAY RGU': 2750,
          'X-RAY MCU': 2750,
          'X-RAY BARIUM MEAL': 2750,
          'X-RAY BARIUM MEAL FOLLOW THROUGH': 2750,
          'X-RAY BARIUM ENEMA': 2750,
          'HSG': 3250,
          'X-RAY OF OPG': 450
        }
      },
      {
        name: 'Mammography and BMD',
        address: 'Bangalore',
        image: '/images/diagnostics/mamo.jpg',
        priceList: {
          'MAMMOGRAPHY (Both Breast)': 2750
        }
      }
  ];
  