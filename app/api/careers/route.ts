import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  getJobByPositionValue,
  jobToHtml,
  jobToPlainText,
  openJobs,
  openJobsToHtml,
  openJobsToPlainText,
  woundCarePhysicianPerDiem,
} from '@/lib/jobs';

const resend = new Resend(process.env.RESEND_API_KEY);

const CAREERS_EMAIL = 'careers@stratumwoundcare.com';
const CAREERS_FROM = 'Stratum Wound Care <careers@stratumwoundcare.com>';

// Escape user-supplied values before interpolating them into HTML emails.
function escapeHtml(value: string): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

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
      [woundCarePhysicianPerDiem.positionValue]: woundCarePhysicianPerDiem.positionLabel,
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
        <li><strong>Name:</strong> ${escapeHtml(name)}</li>
        <li><strong>Email:</strong> ${escapeHtml(email)}</li>
        <li><strong>Phone:</strong> ${escapeHtml(phone)}</li>
      </ul>

      <h3>Position Details</h3>
      <ul>
        <li><strong>Position:</strong> ${escapeHtml(positionDisplay)}</li>
        <li><strong>Years of Experience:</strong> ${escapeHtml(experience)}</li>
      </ul>

      ${message ? `<h3>Cover Letter / Message</h3><p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>` : ''}

      <p><strong>Resume:</strong> ${escapeHtml(resume.name)} (attached)</p>

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
      from: CAREERS_FROM,
      to: CAREERS_EMAIL,
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

    // Send the applicant an automatic confirmation containing the full job
    // description(s) from lib/jobs.ts. A failure here must not fail the request.
    try {
      const appliedJob = getJobByPositionValue(position);
      const safeName = escapeHtml(name);
      const safePosition = escapeHtml(positionDisplay);

      const descriptionHtml = appliedJob ? jobToHtml(appliedJob) : openJobsToHtml();
      const descriptionText = appliedJob ? jobToPlainText(appliedJob) : openJobsToPlainText();

      const introHtml = appliedJob
        ? `<p>Thank you for applying for the <strong>${safePosition}</strong> position with Stratum Wound Care. We have received your application and resume, and a member of our team will review it and be in touch soon.</p>`
        : `<p>Thank you for your interest in Stratum Wound Care and for applying for the <strong>${safePosition}</strong> position. We have received your application and resume, and a member of our team will review it and be in touch soon.</p>`;

      const descriptionHeadingHtml = appliedJob
        ? '<h3 style="margin:0 0 16px 0;">The position you applied for</h3>'
        : `<h3 style="margin:0 0 16px 0;">Currently open ${openJobs.length === 1 ? 'position' : 'positions'}</h3>`;

      const introText = appliedJob
        ? `Thank you for applying for the ${positionDisplay} position with Stratum Wound Care. We have received your application and resume, and a member of our team will review it and be in touch soon.`
        : `Thank you for your interest in Stratum Wound Care and for applying for the ${positionDisplay} position. We have received your application and resume, and a member of our team will review it and be in touch soon.`;

      const descriptionHeadingText = appliedJob
        ? 'THE POSITION YOU APPLIED FOR'
        : `CURRENTLY OPEN ${openJobs.length === 1 ? 'POSITION' : 'POSITIONS'}`;

      const autoReplyHtml = `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #1f2937; line-height: 1.6;">
        <h2 style="margin:0 0 16px 0;">We received your application</h2>
        <p>Hi ${safeName},</p>
        ${introHtml}
        <p>If you have any questions in the meantime, simply reply to this email.</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
        ${descriptionHeadingHtml}
        ${descriptionHtml}
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
        <p style="color:#6b7280;font-size:12px;margin:0;">
          Stratum Wound Care &middot; ${CAREERS_EMAIL}<br />
          This is an automated confirmation message.
        </p>
      </div>
    `;

      const autoReplyText = `We received your application

Hi ${name},

${introText}

If you have any questions in the meantime, simply reply to this email.

------------------------------

${descriptionHeadingText}

${descriptionText}

------------------------------

Stratum Wound Care | ${CAREERS_EMAIL}
This is an automated confirmation message.
`;

      const { error: autoReplyError } = await resend.emails.send({
        from: CAREERS_FROM,
        to: email,
        subject: appliedJob
          ? `Application received - ${appliedJob.title} - Stratum Wound Care`
          : 'Application received - Stratum Wound Care',
        html: autoReplyHtml,
        text: autoReplyText,
        replyTo: CAREERS_EMAIL,
      });

      if (autoReplyError) {
        console.error('Resend auto-reply error:', autoReplyError);
      }
    } catch (autoReplyException) {
      console.error('Failed to send applicant auto-reply:', autoReplyException);
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
