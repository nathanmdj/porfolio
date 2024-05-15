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
    
    const mailOption = [
      {
        from: email,
        to: `nathanmdj.dev@gmail.com`,
        subject: subject,
        html: `
        <p>From: ${sender}</p>
        <p>${message}</p>
        `
      },
      {
        from: email,
        to: sender,
        subject: 'Copy of your email',
        html: `
        <p>From: ${sender}</p>
        <p>Subject: ${subject}</p>
        <p>${message}</p>
        `
      },

    ]
    
    mailOption.map(mail => transporter.sendMail(mail))
  
    
    return NextResponse.json({message: "Email Send Successfully"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: 'Failed to send Email', error: error}, {status: 500})
  }
}