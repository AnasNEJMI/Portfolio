import { EmailTemplate } from '@/components/email-template';
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    const { name, email, subject, message } = req.body;

    try {
      const { data, error } = await resend.emails.send({
        from: 'contact@anasnejmi.com',
        to: ['anasnejmi@gmail.com'],
        subject: `Portfolio - ${subject}`,
        react: EmailTemplate({name, email, subject, message}),
      });
  
      if (error) {
        console.error('Resend API error:', error);
        return res.status(500).json({ error });
      }
  
      return res.json(data);
    } catch (error) {
      console.error('Handler error:', error);
      return res.status(500).json({ error: error || 'Unknown error' });
    }
}