// /src/pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { emails, paymentDetails, testName, amount }: { emails: string[], paymentDetails: any, testName: string, amount: number } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const emailContent = `
      Thank you for your payment!

      Test Details:
      Test Name: ${testName}
      Amount Paid: ₹${amount}

      Payment Details:
      Payment ID: ${paymentDetails.razorpay_payment_id}
      Order ID: ${paymentDetails.razorpay_order_id}
      
      Thank you for choosing KnowMyHealth for your diagnostic needs.
      If you have any questions, please don't hesitate to contact us.
    `;

    try {
      // Send emails to all provided addresses
      const emailPromises = emails.map((email: string) =>
        transporter.sendMail({
          from: process.env.EMAIL_USERNAME,
          to: email,
          subject: `Payment Confirmation - ${testName}`,
          text: emailContent,
        })
      );

      await Promise.all(emailPromises);
      res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
      console.error('Email sending error:', error);
      res.status(500).json({ error: 'Failed to send emails' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
