import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const requiredFields = [
      'providerName',
      'facility',
      'npiNumber',
      'phone',
      'email',
      'patientName',
      'patientDOB',
      'woundType',
      'woundLocation',
      'duration',
      'medicalHistory',
      'urgency',
    ];

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
    // 1. Store the referral in a secure database
    // 2. Send email notifications to the clinic
    // 3. Log the submission for compliance
    // 4. Encrypt sensitive patient data

    console.log('Referral received:', {
      provider: data.providerName,
      patient: data.patientName,
      urgency: data.urgency,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending (in production, use a service like Resend, SendGrid, or nodemailer)
    const emailContent = `
      New Provider Referral Received

      Provider Information:
      - Name: ${data.providerName}
      - Facility: ${data.facility}
      - NPI: ${data.npiNumber}
      - Phone: ${data.phone}
      - Email: ${data.email}

      Patient Information:
      - Name: ${data.patientName}
      - DOB: ${data.patientDOB}
      - MRN: ${data.patientMRN || 'N/A'}
      - Urgency: ${data.urgency}

      Wound Information:
      - Type: ${data.woundType}
      - Location: ${data.woundLocation}
      - Duration: ${data.duration}
      - Current Treatment: ${data.currentTreatment || 'N/A'}
      - Medical History: ${data.medicalHistory}

      Submitted: ${new Date().toLocaleString()}
    `;

    // TODO: Implement actual email sending
    // await sendEmail({
    //   to: process.env.REFERRAL_EMAIL,
    //   subject: `New ${data.urgency.toUpperCase()} Provider Referral`,
    //   body: emailContent,
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Referral submitted successfully',
        referenceId: `REF-${Date.now()}`,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing referral:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
