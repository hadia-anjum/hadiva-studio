import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');

/**
 * Sends a transactional email using Resend
 * @param to Recipient email(s)
 * @param subject Email subject
 * @param html Email HTML content body
 */
export async function sendEmail({ to, subject, html }: { to: string | string[]; subject: string; html: string }) {
  try {
    const data = await resend.emails.send({
      from: 'Hadiva Studio <noreply@hadiva.studio>',
      to,
      subject,
      html,
    });
    return data;
  } catch (error) {
    console.error('Resend email delivery error:', error);
    throw error;
  }
}
