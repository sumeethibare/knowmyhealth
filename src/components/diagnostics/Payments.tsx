'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const router = useRouter();

  const handleConfirmPayment = () => {
    if (selectedPayment === 'Pay Online') {
      router.push('https://razorpay.me/@knowmyhealth');
    }
  };

  return (
    <div className="h-96 bg-zinc-50 flex items-center justify-center px-4">
      <div className=" p-6 max-w-lg w-full">
        <h1 className="text-2xl font-medium text-zinc-800 mb-8">
          Choose Payment Mode
        </h1>
        <div className="space-y-6">
          {/* Payment Mode Option */}
          <div
            className={`border p-4 cursor-pointer transition card-hover-animation ${selectedPayment === 'Pay Online'
                ? 'border-blue-500 bg-blue-50'
                : 'border-zinc-300 hover:border-blue-500 hover:bg-blue-50'
              }`}
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
                <h2 className="text-lg font-semibold text-zinc-800">
                  Pay Online (Razorpay)
                </h2>
                <p className="text-sm text-zinc-500">
                  Use Razorpay to complete your payment securely.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Confirm Button */}
        {selectedPayment && (
          <button
            className="mt-8 w-full btn-primary card-hover-animation btn text-white py-3 shadow hover:bg-blue-700 transition"
            onClick={handleConfirmPayment}
          >
            Confirm Payment
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
