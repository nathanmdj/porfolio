import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS


export async function POST(request){
  console.log('hey');
  try {
    const {sender, subject, message} = await request.json();
    
    const transporter = nodemailer.createTransport({
      service:'gmail',
      auth: {
        user: email,
        pass: pass
      },
    })
    
    const mailOption = {
      from: email,
      to: `nathanmdj.dev@gmail.com, ${sender}`,
      subject: subject,
      html: `
      <p>From: ${sender}</p>
      <p>${message}</p>
      `,
    }
    await transporter.sendMail(mailOption)
    
    return NextResponse.json({message: "Email Send Successfully"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: 'Failed to send Email', error: error}, {status: 500})
  }
}