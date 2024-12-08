'use client';

import { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState<'Pay After Treatment' | 'Pay Online' | null>('Pay After Treatment');
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [selectedTest, setSelectedTest] = useState<any>(null);
  const [selectedPrice, setSelectedPrice] = useState<number | string>('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedScanType, setSelectedScanType] = useState<string | undefined>('');

  useEffect(() => {
    // Retrieve the selected test details, price, scan type, and date from localStorage
    const test = JSON.parse(localStorage.getItem('selectedTest') || 'null');
    const price = JSON.parse(localStorage.getItem('selectedPrice') || '""');
    const date = JSON.parse(localStorage.getItem('selectedDate') || '""');
    
    // Safely retrieve scan type, set default to empty string if it's null or undefined
    const scanType = localStorage.getItem('selectedScanType') || '';
    
    if (test) setSelectedTest(test);
    if (price) setSelectedPrice(price);
    if (date) setSelectedDate(date);
    if (scanType) setSelectedScanType(scanType);
  }, []);

  const downloadReceipt = () => {
    if (selectedTest && selectedPrice && selectedDate && selectedScanType) {
      const doc = new jsPDF();
      doc.text('Booking Receipt', 20, 20);
      doc.text(`Diagnostic Test: ${selectedTest.name}`, 20, 30);
      doc.text(`Scan Type: ${selectedScanType}`, 20, 40); // Display the scan type
      doc.text(`Location: ${selectedTest.address}`, 20, 50);
      doc.text(`Price: ₹${selectedPrice}`, 20, 60);
      doc.text(`Payment Method: ${paymentMethod}`, 20, 70); // Use the selected payment method
      doc.text(`Booking Date: ${selectedDate}`, 20, 80);

      doc.save('receipt.pdf');
    }
  };

  const handlePayment = () => {
    if (paymentMethod === 'Pay After Treatment') {
      setIsBookingConfirmed(true);
      alert('Booking confirmed!');
    } else if (paymentMethod === 'Pay Online') {
      // Redirect to Razorpay link
      window.location.href = 'https://razorpay.me/@knowmyhealth';
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="p-2 max-w-xl mx-auto py-20">
      <h1 className="text-3xl font-semibold text-center mb-6">Choose Payment Mode</h1>
      <div className="space-y-4">
        {/* Payment Option Selector */}
        <div className="flex flex-col space-y-2">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="Pay After Treatment"
              checked={paymentMethod === 'Pay After Treatment'}
              onChange={() => setPaymentMethod('Pay After Treatment')}
              className="mr-2 radio checked:bg-red-500"
            />
            <span>Pay After Treatment</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="Pay Online"
              checked={paymentMethod === 'Pay Online'}
              onChange={() => setPaymentMethod('Pay Online')}
              className="mr-2 radio checked:radio-error"
            />
            <span>Pay Online (Razorpay)</span>
          </label>
        </div>
      </div>
      
      <button
        className="mt-6 btn btn-primary w-full"
        onClick={handlePayment}
        disabled={!paymentMethod}
      >
        Confirm Payment
      </button>

      {isBookingConfirmed && (
        <div className="mt-6 space-y-4">
          <button
            className="btn btn-outline w-full"
            onClick={() => (window.location.href = '/diagnostics')}
          >
            Go Back to Diagnostics
          </button>
          <button
            className="btn btn-secondary w-full"
            onClick={downloadReceipt}
          >
            Download Receipt
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
