export const runtime = 'edge';
export const dynamic = 'force-dynamic';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { firstName, lastName, email, phone, message } = req.body;

  try {
    await resend.emails.send({
  from: 'CoPage <onboarding@resend.dev>',
  to: 'altamashthegreat06@gmail.com',
  subject: 'New Contact Form Submission',
  html: `
    <div>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
  `,
});
    

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email sending error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}