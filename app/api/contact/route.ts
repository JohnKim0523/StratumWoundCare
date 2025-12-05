import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone'];

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

    // Format appointment type for display
    const appointmentTypeLabels: Record<string, string> = {
      'new-patient': 'New Patient',
      'follow-up': 'Follow-Up',
      'consultation': 'Consultation',
      'telehealth': 'Telehealth',
    };

    const appointmentTypeDisplay = data.appointmentType
      ? appointmentTypeLabels[data.appointmentType] || data.appointmentType
      : 'Not specified';

    // Build email content
    const emailHtml = `
      <h2>New Appointment Request</h2>
      <p>You have received a new appointment request from the Stratum Wound Care website.</p>

      <h3>Contact Information</h3>
      <ul>
        <li><strong>Name:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Preferred Contact Method:</strong> ${data.preferredContact || 'Email'}</li>
      </ul>

      <h3>Appointment Details</h3>
      <ul>
        <li><strong>Appointment Type:</strong> ${appointmentTypeDisplay}</li>
        <li><strong>Insurance Provider:</strong> ${data.insurance || 'Not provided'}</li>
      </ul>

      ${data.message ? `<h3>Message</h3><p>${data.message}</p>` : ''}

      <hr />
      <p style="color: #666; font-size: 12px;">
        Submitted on ${new Date().toLocaleString('en-US', {
          dateStyle: 'full',
          timeStyle: 'short'
        })}
      </p>
    `;

    const emailText = `
New Appointment Request

Contact Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Preferred Contact Method: ${data.preferredContact || 'Email'}

Appointment Details:
- Appointment Type: ${appointmentTypeDisplay}
- Insurance Provider: ${data.insurance || 'Not provided'}

${data.message ? `Message:\n${data.message}` : ''}

Submitted: ${new Date().toLocaleString()}
    `;

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: 'Stratum Wound Care <appointments@stratumwoundcare.com>',
      to: 'mark@stratumwoundcare.com',
      subject: `New Appointment Request - ${data.name}`,
      html: emailHtml,
      text: emailText,
      replyTo: data.email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Appointment request submitted successfully',
        referenceId: `APPT-${Date.now()}`,
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
