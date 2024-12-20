// /src/pages/payment.tsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const PaymentPage = () => {
  const searchParams = useSearchParams();
  const [emails, setEmails] = useState(['']);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [amount, setAmount] = useState(0);
  const [testName, setTestName] = useState('');

  useEffect(() => {
    const amountParam = searchParams.get('amount');
    const testNameParam = searchParams.get('testName');
    if (amountParam) setAmount(parseInt(amountParam));
    if (testNameParam) setTestName(testNameParam);
  }, [searchParams]);

  const addEmailField = () => {
    setEmails([...emails, '']);
  };

  const removeEmailField = (index: number) => {
    const newEmails = emails.filter((_, i) => i !== index);
    setEmails(newEmails);
  };

  const updateEmail = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handlePayment = async () => {
    if (!emails[0]) {
      alert('Please enter at least one email address');
      return;
    }

    const res = await fetch('/api/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();
    if (!data.id) {
      alert('Failed to create order');
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: 'KnowMyHealth',
      description: `Payment for ${testName}`,
      order_id: data.id,
      handler: async (response: any) => {
        setPaymentSuccess(true);

        // Send confirmation emails to all provided addresses
        await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            emails,
            paymentDetails: response,
            testName,
            amount,
          }),
        });
      },
      prefill: {
        email: emails[0],
        contact: '',
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Payment Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{testName}</h2>
          <p className="text-2xl font-bold text-blue-600">₹{amount}</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Addresses for Confirmation
          </label>
          {emails.map((email, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="email"
                value={email}
                onChange={(e) => updateEmail(index, e.target.value)}
                className="flex-1 p-2 border rounded"
                placeholder="Enter email address"
              />
              {index > 0 && (
                <button
                  onClick={() => removeEmailField(index)}
                  className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            onClick={addEmailField}
            className="mt-2 text-blue-600 hover:text-blue-800"
          >
            + Add another email
          </button>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Pay ₹{amount}
        </button>

        {paymentSuccess && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            Payment successful! Confirmation emails will be sent shortly.
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
