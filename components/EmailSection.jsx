'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { Github } from 'react-bootstrap-icons';
import { Telegram } from 'react-bootstrap-icons';

const EmailSection = () => {
  const [sender, setSender] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender,
        subject,
        message
      })
    })

    if(response.ok){
      setSender('')
      setSubject('')
      setMessage('')
    }
    console.log(await response.json());
    console.log(response.status);
  }
  return (
    <section className='grid md:grid-cols-2 my-12 py-20 gap-4 md:min-h-dvh items-center' id='contact'>
      <div>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At adipisci quis minus quaerat inventore optio nulla placeat dolorem quam exercitationem labore nostrum tempore, aperiam totam a reprehenderit veritatis consequatur in voluptatem dicta ea qui autem. Unde ullam asperiores, quia ea aspernatur, cupiditate consectetur inventore corporis sit perferendis dignissimos voluptas nihil?
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={'https://github.com/nathanmdj'} target='_blank'>          
            <Github width={40} height={40} color='white'/>
          </Link>
          <Link href={'https://t.me/nathanmdj'} target='_blank'>          
            <Telegram width={40} height={40} color='white'/>
          </Link>
        </div>
      </div>
      <div className="form-container">
        <form className='flex flex-col' onSubmit={(e)=>sendEmail(e)}>
          <div className='mb-6'>
            <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
              Your email
            </label>
            <input 
              type="email" 
              id='email'
              required
              placeholder='yourEmail@email.com'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              value={sender}
              onChange={(e)=>setSender(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>
              Subject
            </label>
            <input 
              type="text" 
              id='subject'
              required
              placeholder='Job Offer'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              value={subject}
              onChange={(e)=>setSubject(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label 
              htmlFor="message" 
              className='text-white block mb-2 text-sm font-medium'>
              Message
            </label>
            <textarea
              name="message" 
              id="message"
              required
              rows={5}
              placeholder='Your Message. . .'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              ></textarea>
          </div>
            <button
              type='submit'
              className=' bg-green-700 text-white py-2 rounded-lg'
            >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection