'use client';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 pt-20">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400'>Hello, I'm </span>
            
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Jonathan',
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                'a Web Developer',
                3000,
              ]}
              wrapper="span"
              speed={50}
              style={{display: 'block' }}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#adb7be] text-lg mb-6 lg:text-xl'>
           with a strong foundation in programming and problem-solving. I bring a passion for crafting efficient and innovative solutions to every project I undertake.
          </p>
          <div className='mb-3'>
            <Link href={'#contact'}>
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 hover:bg-slate-800 text-white bg-gradient-to-br from-green-900 via-green-700 to-green-500'>Hire Me</button>
            </Link>
            <a href={'/CV.pdf'} download>            
              <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border-green-500 border mt-3'>Download CV</button>              
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src={'/avatar.png'}
              alt='avatar'
              width={300}
              height={300}
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-3/4 lg:top-1/2 lg:mt-3   left-1/2'
            />
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection