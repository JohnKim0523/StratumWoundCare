import { NextRequest, NextResponse } from 'next/server';

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

    // In a production environment, you would:
    // 1. Upload resume to cloud storage (AWS S3, Cloudinary, etc.)
    // 2. Store application data in database
    // 3. Send email notification to HR team
    // 4. Send confirmation email to applicant
    // 5. Integrate with ATS (Applicant Tracking System)

    console.log('Career application received:', {
      name,
      email,
      position,
      resumeName: resume.name,
      resumeSize: resume.size,
      timestamp: new Date().toISOString(),
    });

    // Email content that would be sent in production
    const emailContent = `
      New Career Application

      Applicant: ${name}
      Email: ${email}
      Phone: ${phone}
      Position: ${position}
      Experience: ${experience}

      ${message ? `Cover Letter:\n${message}\n` : ''}

      Resume: ${resume.name} (${(resume.size / 1024).toFixed(2)} KB)

      Submitted: ${new Date().toLocaleString()}
    `;

    // TODO: Implement actual file upload and email sending
    //
    // Example with AWS S3:
    // const s3Key = `applications/${Date.now()}-${resume.name}`;
    // await uploadToS3(resume, s3Key);
    //
    // Example email with attachment:
    // await sendEmail({
    //   to: process.env.HR_EMAIL!,
    //   subject: `New Application - ${position}`,
    //   body: emailContent,
    //   attachments: [{ filename: resume.name, content: await resume.arrayBuffer() }]
    // });

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
