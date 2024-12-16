import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";

interface ConsultationData {
  userEmail: string;
  doctor: string;
  dateTime: string;
  location: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as ConsultationData;
    const { userEmail, doctor, dateTime, location } = body;

    // Validate required fields
    if (!userEmail || !doctor || !dateTime || !location) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Set up the transport options for sending email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c3e50;">Consultation Booking Confirmation</h2>
        <p>Dear User,</p>
        <p>Your consultation booking has been confirmed!</p>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Doctor:</strong> ${doctor}</p>
          <p><strong>Date and Time:</strong> ${dateTime}</p>
          <p><strong>Location:</strong> ${location}</p>
        </div>
        <p>Thank you for choosing our services.</p>
        <p>Best regards,<br>Your Consultation Team</p>
      </div>
    `;

    const mailOptions = {
      from: {
        name: "Know My Health",
        address: process.env.EMAIL_USERNAME!
      },
      to: userEmail,
      subject: `Consultation Booking Confirmation`,
      text: `
        Dear User,

        Your consultation booking has been confirmed!

        Doctor: ${doctor}
        Date and Time: ${dateTime}
        Location: ${location}

        Thank you for choosing our services.

        Best regards,
        Your Consultation Team
      `,
      html: htmlContent,
    };

    console.log('Attempting to verify SMTP connection...');
    console.log('Email configuration:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE,
      user: process.env.EMAIL_USERNAME,
      // Don't log the actual password
      hasPassword: !!process.env.EMAIL_PASSWORD
    });

    await transporter.verify();
    console.log('SMTP connection verified successfully');
    
    console.log('Attempting to send email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error sending confirmation email", error: errorMessage },
      { status: 500 }
    );
  }
}
