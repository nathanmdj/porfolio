'use client'
import { BootstrapOriginalWordmark, Css3Original,  ExpressOriginalWordmark, Html5Original, JavascriptOriginal,  LaravelOriginalWordmark,  MongodbOriginalWordmark, MysqlOriginalWordmark,  NextjsOriginalWordmark,  NodejsOriginalWordmark, PhpOriginal,  ReactOriginalWordmark, SassOriginal, TailwindcssOriginal, TypescriptOriginal } from 'devicons-react'
import React from 'react'
import { motion,  } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TechStack = () => {
  
  const { inView, ref: inViewRef } = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });
 

  const stack1 = [
    <Html5Original size={60} key={'html'}/>,
    <Css3Original size={60} key={'css'}/>,
    <SassOriginal size={60} key={'sass'}/>,
    <BootstrapOriginalWordmark size={60} key={'bs5'}/>,
    <TailwindcssOriginal size={60} key={'tw'}/>,
    <JavascriptOriginal size={60} key={'js'}/>,
    <TypescriptOriginal size={60} key={'ts'}/>,
  ]
const stack2 = [
    <ReactOriginalWordmark size={60} key={'react'}/>,
    <NextjsOriginalWordmark size={60} className='bg-gray-300 rounded-full p-2' key={'next'}/>,
    <NodejsOriginalWordmark size={60} key={'node'}/>,
    <ExpressOriginalWordmark size={60} className='bg-gray-300 rounded-full p-2' key={'express'}/>,
    <MongodbOriginalWordmark size={60} key={'mdb'}/>,
    <LaravelOriginalWordmark size={60} key={'laravel'}/>,
    <PhpOriginal size={60} key={'php'}/>,
    <MysqlOriginalWordmark size={60} key={'mysql'}/>,
  ]

  const stackContainerVariant = {
    initial: {y: -50, opacity: 0},
    animate: {
      y: 0,
      opacity: 1, 
      transition: {
        staggerChildren: 0.2,
      }
  },
    
  }
  const stackVariant = {
    initial: {y: -50, opacity: 0},
    animate: {y: 0, opacity: 1}
  };

  return (
    <section className='pt-10 2xl:mt-20' ref={inViewRef}
    >
      <motion.h2 className='text-center text-4xl font-bold text-white mb-5'
        
        variants={stackVariant}
        initial='initial'
        animate={inView ? 'animate' : 'initial'}
        transition={{duration: 1, delay: 0.3}}
      >Skills</motion.h2>
      <motion.ul className="flex gap-5 md:gap-10 justify-center flex-wrap"
        variants={stackContainerVariant}
        initial='initial'
        animate={inView ? 'animate' : 'initial'}
      >
        {stack1.map((item, i)=>(
          <motion.li
            key={i}
            variants={stackVariant}
          >
            {item}
          </motion.li>
        ))}
        
      </motion.ul> 
      <motion.ul className="flex gap-5 md:gap-10 justify-center mt-10 flex-wrap"
        variants={stackContainerVariant}
        initial='initial'
        animate={inView ? 'animate' : 'initial'}
      >
       {stack2.map((item, i)=>(
          <motion.li
            key={i}
            variants={stackVariant}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default TechStack