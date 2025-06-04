import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Subject and message are required' },
        { status: 400 }
      );
    }
    
    // Default recipient is the EMAIL_USER (can be overridden in the request)
    const to = body.to || process.env.EMAIL_USER;
    
    // Configure email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: body.subject,
      text: body.message,
      html: body.htmlMessage || body.message.replace(/\n/g, '<br>'),
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 