import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { firstName, lastName, email, phone, message } = req.body;

  try {
    const result = await resend.emails.send({
      from: 'CoPage <onboarding@resend.dev>', // change to verified domain later
      to: 'altamash16.05@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: sans-serif;">
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    console.log('✅ Resend response:', result);

    if (result.error) {
      console.error('❌ Resend error:', result.error);
      return res.status(500).json({ error: 'Email not sent' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('❌ Catch block error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
