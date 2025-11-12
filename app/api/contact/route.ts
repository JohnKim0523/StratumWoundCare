import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'serviceInterest', 'message'];

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // In a production environment, you would:
    // 1. Store the inquiry in a database
    // 2. Send email notifications to the clinic
    // 3. Send confirmation email to the user
    // 4. Integrate with CRM system

    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      service: data.serviceInterest,
      timestamp: new Date().toISOString(),
    });

    // Email content that would be sent in production
    const emailContent = `
      New Contact Form Submission

      From: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Service Interest: ${data.serviceInterest}

      Message:
      ${data.message}

      Submitted: ${new Date().toLocaleString()}
    `;

    // TODO: Implement actual email sending using services like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - AWS SES
    // - nodemailer with SMTP

    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@stratumwoundcare.com',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New Contact Inquiry - ${data.serviceInterest}`,
    //   text: emailContent,
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        referenceId: `CONTACT-${Date.now()}`,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
