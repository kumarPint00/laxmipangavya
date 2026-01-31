import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to business
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'info@laxmipanchgavya.com',
      subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #78350f; border-radius: 10px;">
          <h2 style="color: #78350f; border-bottom: 2px solid #fef3c7; padding-bottom: 10px;">
            🌿 New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #fef3c7; border-radius: 5px;">
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #78350f;">Message:</h3>
            <p style="background-color: #fff; padding: 15px; border-left: 4px solid #78350f; line-height: 1.6;">
              ${message}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #fef3c7; text-align: center; color: #78350f;">
            <p style="margin: 5px 0;">Laxmi Panchgavya Ayurvedic</p>
            <p style="margin: 5px 0; font-size: 12px;">Dedicated to your wellness, naturally 🌿</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to customer
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Laxmi Panchgavya Ayurvedic',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #78350f; border-radius: 10px;">
          <h2 style="color: #78350f; border-bottom: 2px solid #fef3c7; padding-bottom: 10px;">
            🌿 Thank You for Contacting Us!
          </h2>
          
          <p style="line-height: 1.6;">Dear ${name},</p>
          
          <p style="line-height: 1.6;">
            Thank you for reaching out to Laxmi Panchgavya Ayurvedic. We have received your message and our team will get back to you within 24 hours.
          </p>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #fef3c7; border-radius: 5px;">
            <h3 style="color: #78350f; margin-top: 0;">Your Message:</h3>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
            <p style="background-color: #fff; padding: 10px; border-left: 4px solid #78350f; margin-top: 10px;">
              ${message}
            </p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #fff; border-radius: 5px; border: 1px solid #fef3c7;">
            <h3 style="color: #78350f; margin-top: 0;">In the meantime:</h3>
            <p style="margin: 5px 0;">📞 Call us: <a href="tel:${process.env.BUSINESS_PHONE}" style="color: #78350f;">${process.env.BUSINESS_PHONE}</a></p>
            <p style="margin: 5px 0;">💬 WhatsApp: <a href="https://wa.me/${process.env.BUSINESS_WHATSAPP}" style="color: #78350f;">Click here</a></p>
            <p style="margin: 5px 0;">📧 Email: <a href="mailto:${process.env.BUSINESS_EMAIL}" style="color: #78350f;">${process.env.BUSINESS_EMAIL}</a></p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #fef3c7; text-align: center; color: #78350f;">
            <p style="margin: 5px 0; font-weight: bold;">Laxmi Panchgavya Ayurvedic</p>
            <p style="margin: 5px 0; font-size: 12px;">Dedicated to your wellness, naturally 🌿</p>
            <p style="margin: 5px 0; font-size: 12px;">© 2026 All rights reserved</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
