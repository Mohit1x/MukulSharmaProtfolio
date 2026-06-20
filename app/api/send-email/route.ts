import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to yourself (tutor)
    const tutorEmail = await resend.emails.send({
      from: 'onboarding@resend.dev', // You'll replace this with your verified email
      to: 'mukulsharma0201@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 15px;">
              <p style="color: #666; margin: 0;"><strong>Name:</strong></p>
              <p style="color: #333; margin: 5px 0 0 0;">${name}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="color: #666; margin: 0;"><strong>Email:</strong></p>
              <p style="color: #333; margin: 5px 0 0 0;"><a href="mailto:${email}">${email}</a></p>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="color: #666; margin: 0;"><strong>Message:</strong></p>
              <p style="color: #333; margin: 5px 0 0 0; white-space: pre-wrap;">${message}</p>
            </div>

            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              This email was sent from your tutor portfolio website contact form.
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to visitor
    const visitorEmail = await resend.emails.send({
      from: 'onboarding@resend.dev', // You'll replace this with your verified email
      to: email,
      subject: 'Thank you for contacting Mukul Sharma - Chemistry Educator',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; margin-bottom: 20px;">Thank You, ${name}!</h2>
            
            <p style="color: #666; line-height: 1.6;">
              Thank you for reaching out! I've received your message and will get back to you as soon as possible.
            </p>

            <p style="color: #666; line-height: 1.6;">
              In the meantime, feel free to contact me directly:
            </p>

            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
              <p style="margin: 5px 0;"><strong>📞 Phone:</strong> <a href="tel:+919024453508" style="color: #14b8a6; text-decoration: none;">9024453508</a></p>
              <p style="margin: 5px 0;"><strong>💬 WhatsApp:</strong> <a href="https://wa.me/919024453508" style="color: #14b8a6; text-decoration: none;">Message on WhatsApp</a></p>
            </div>

            <p style="color: #666; line-height: 1.6;">
              Best regards,<br>
              <strong>Mukul Sharma</strong><br>
              Chemistry Educator | B.Ed Trained
            </p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              This is an automated response from your contact form.
            </p>
          </div>
        </div>
      `,
    })

    if (tutorEmail.error || visitorEmail.error) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
