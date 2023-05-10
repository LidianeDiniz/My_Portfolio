// import { nodemailer } from 'nodemailer';

import { NextApiRequest, NextApiResponse } from 'next';

// const email = process.env.MAIL_ADRESS;

// const transporter = nodemailer.createTransporte({

// });

export default async (req: NextApiRequest, res: NextApiResponse) =>
  res.send('oi');
