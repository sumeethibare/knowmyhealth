'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const downloadReceipt = () => {
    const doc = new jsPDF();
    doc.text('Booking Receipt', 20, 20);
    doc.text('Diagnostic Test: MRI', 20, 30);
    doc.text('Location: Bangalore, Center A', 20, 40);
    doc.text('Time: 10:00 AM', 20, 50);
    doc.text('Price: ₹3000', 20, 60);
    doc.text('Payment Method: Cash on Delivery', 20, 70);
    doc.text('Booking Date: 2024-12-05', 20, 80);

    doc.save('receipt.pdf');
  };

  const handlePayment = () => {
    if (paymentMethod !== 'Cash on Delivery') {
      alert('Only Cash on Delivery is available.');
      return;
    }
    setIsBookingConfirmed(true);
    alert('Booking confirmed!');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Payment</h1>
      <div className="space-y-4">
        <div
          className={`p-4 border ${
            paymentMethod === 'Cash on Delivery' ? 'border-primary' : 'border-gray-300'
          } rounded-lg cursor-not-allowed`}
        >
          Cash on Delivery
        </div>
      </div>
      <button
        className="mt-6 btn btn-primary w-full"
        onClick={handlePayment}
        disabled={paymentMethod !== 'Cash on Delivery'}
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
