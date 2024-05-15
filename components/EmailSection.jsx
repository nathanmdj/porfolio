'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { Github } from 'react-bootstrap-icons';
import { Telegram } from 'react-bootstrap-icons';
import { useInView } from 'react-intersection-observer';
import { motion,  } from 'framer-motion'
import SendLoader from './SendLoader';
import { useToast } from './ui/use-toast';
import { Toaster } from './ui/toaster';
import { ToastAction } from './ui/toast';

const EmailSection = () => {
  const [sender, setSender] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const {toast} = useToast()

  const { inView, ref: inViewRef } = useInView({
    threshold: 0.25, // Adjust threshold as needed
  });

  const emailVariant = {
    initial: {y: -100, opacity: 0},
    animate: {y: 0, opacity: 1}
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      toast({
        description: 'Your message has been sent.'
      })
    } else {
      toast({
        variant: 'destructive',
        description: 'Message sending failed!',
        action: <ToastAction altText='Try again'
          onClick={sendEmail}
        >Try Again</ToastAction>
      })
    }

    setIsLoading(false)
    console.log(await response.json());
    console.log(response.status);
  }
  return (
    <section className='grid md:min-h-dvh items-center' id='contact'
      ref={inViewRef}
    >
      <motion.div className="grid md:grid-cols-2 gap-4 "
        variants={emailVariant}
        initial='initial'
        animate={inView ? 'animate' : 'initial'}
        transition={{duration: 0.3, delay: 0.3}}
      >
        <div>
          <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
          <p className='text-[#ADB7BE] mb-4 max-w-md'>
            I'm always open to new opportunities, collaborations, and exciting projects. Whether you have a project in mind, want to discuss potential partnerships, or simply want to say hello, feel free to reach out using the contact form  or via email at <a href='mailto:nathanmdj.dev@gmail.com'><span className='text-orange-500'>nathanmdj.dev@gmail.com</span></a>. I look forward to hearing from you and exploring how we can work together to bring your ideas to life and create impactful digital solutions.
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
              >{isLoading ? <SendLoader/> : 'Send Message'}</button>
          </form>
        </div>
        <Toaster/>
      </motion.div>

      

    </section>
  )
}

export default EmailSection