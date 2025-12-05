import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const experience = formData.get('experience') as string;
    const message = formData.get('message') as string;
    const resume = formData.get('resume') as File;

    // Validate required fields
    if (!name || !email || !phone || !position || !experience || !resume) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload PDF or Word document.' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (resume.size > maxSize) {
      return NextResponse.json(
        { error: 'File size exceeds 5MB limit' },
        { status: 400 }
      );
    }

    // Format position for display
    const positionLabels: Record<string, string> = {
      'physician': 'Physician',
      'nurse-practitioner': 'Nurse Practitioner (NP)',
      'registered-nurse': 'Registered Nurse (RN)',
      'licensed-practical-nurse': 'Licensed Practical Nurse (LPN)',
      'billing-specialist': 'Billing Specialist',
      'clinical-director': 'Clinical Director',
      'other': 'Other',
    };

    const positionDisplay = positionLabels[position] || position;

    // Convert resume file to buffer for attachment
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    // Build email content
    const emailHtml = `
      <h2>New Career Application</h2>
      <p>You have received a new job application from the Stratum Wound Care website.</p>

      <h3>Applicant Information</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>

      <h3>Position Details</h3>
      <ul>
        <li><strong>Position:</strong> ${positionDisplay}</li>
        <li><strong>Years of Experience:</strong> ${experience}</li>
      </ul>

      ${message ? `<h3>Cover Letter / Message</h3><p>${message}</p>` : ''}

      <p><strong>Resume:</strong> ${resume.name} (attached)</p>

      <hr />
      <p style="color: #666; font-size: 12px;">
        Submitted on ${new Date().toLocaleString('en-US', {
          dateStyle: 'full',
          timeStyle: 'short'
        })}
      </p>
    `;

    const emailText = `
New Career Application

Applicant Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Position Details:
- Position: ${positionDisplay}
- Years of Experience: ${experience}

${message ? `Cover Letter / Message:\n${message}\n` : ''}

Resume: ${resume.name} (attached)

Submitted: ${new Date().toLocaleString()}
    `;

    // Send email via Resend with resume attachment
    const { error } = await resend.emails.send({
      from: 'Stratum Wound Care <careers@stratumwoundcare.com>',
      to: 'mark@stratumwoundcare.com',
      subject: `New Job Application - ${positionDisplay} - ${name}`,
      html: emailHtml,
      text: emailText,
      replyTo: email,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send application' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully',
        applicationId: `APP-${Date.now()}`,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing career application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
