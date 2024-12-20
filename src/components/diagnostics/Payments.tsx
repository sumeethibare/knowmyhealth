'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [price, setPrice] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const priceFromQuery = queryParams.get('price');
    
    if (priceFromQuery) {
      setPrice(parseInt(priceFromQuery, 10));
    }
  }, []);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleConfirmPayment = () => {
    if (selectedPayment === 'Pay Online') {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: price * 100,
        currency: 'INR',
        name: 'Know My Health',
        description: 'Test Transaction',
        handler: function (response: { razorpay_payment_id: string }) {
          console.log('Payment successful:', response);
          alert(`Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'Test User',
          email: 'testuser@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response: any) {
        console.error('Payment failed:', response.error);
        alert('Payment failed: ' + response.error.description);
      });
      rzp1.open();
    }
  };

  return (
    <div className="h-96 bg-zinc-50 flex items-center justify-center px-4">
      <div className="p-6 max-w-lg w-full">
        <h1 className="text-2xl font-medium text-zinc-800 mb-8">Choose Payment Mode</h1>
        <div className="space-y-6">
          <div
            className={`border p-4 cursor-pointer transition card-hover-animation ${selectedPayment === 'Pay Online' ? 'border-blue-500 bg-blue-50' : 'border-zinc-300 hover:border-blue-500 hover:bg-blue-50'}`}
            onClick={() => setSelectedPayment('Pay Online')}
          >
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                name="paymentMethod"
                value="Pay Online"
                className="w-5 h-5 text-blue-600 focus:ring-blue-500 cursor-pointer"
                checked={selectedPayment === 'Pay Online'}
                readOnly
              />
              <div>
                <h2 className="text-lg font-semibold text-zinc-800">Pay Online (Razorpay)</h2>
                <p className="text-sm text-zinc-500">Use Razorpay to complete your payment securely.</p>
              </div>
            </div>
          </div>
        </div>
        {selectedPayment && (
          <button
            className="mt-8 w-full btn-primary card-hover-animation btn text-white py-3 shadow hover:bg-blue-700 transition"
            onClick={handleConfirmPayment}
          >
            Confirm Payment of ₹{price}
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
