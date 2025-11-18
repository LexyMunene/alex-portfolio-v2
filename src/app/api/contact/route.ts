import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAILJS_SERVICE_ID = 'service_t4ifl4a';
const EMAILJS_TEMPLATE_ID = 'template_u7na155';
const EMAILJS_PUBLIC_KEY = 'BUU1W22QWE3DYZUOR';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using EmailJS REST API
    const emailJsResponse = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: body.name,
            from_email: body.email,
            subject: body.subject,
            message: body.message,
            to_email: 'munenealex073@gmail.com',
            sender_name: body.name,
            sender_email: body.email,
            reply_to_email: body.email,
          },
        }),
      }
    );

    const responseText = await emailJsResponse.text();
    
    console.log('EmailJS Response Status:', emailJsResponse.status);
    console.log('EmailJS Response Body:', responseText);

    if (!emailJsResponse.ok) {
      console.error('EmailJS Error:', responseText);
      throw new Error(
        `EmailJS Error: ${emailJsResponse.status} - ${responseText}`
      );
    }

    // Try to parse as JSON, but handle non-JSON responses
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = { message: 'Email sent successfully' };
    }

    console.log('Email sent successfully via EmailJS:', responseData);

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';

    return NextResponse.json(
      {
        error: 'Failed to send email. Please try again later.',
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
