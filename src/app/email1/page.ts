import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import Email1 from '../components/Email1';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail =  async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <sadiqnabeel4@gmail.com>',
      to: ['sadiqsaleem085@gmail.com'],
      subject: 'Hello world',
      react: Email1(),
    });

    if (error) {
      res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    console.log({ error }); 
  }
}


export default sendEmail