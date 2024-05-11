'use client'
import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const ProjectSection = () => {

  const { inView, ref: inViewRef } = useInView({
    threshold: 0.25, // Adjust threshold as needed
  });

  const containerVariant = {
    initial: {opacity: 0},
    animate: {
      opacity: 1, 
      transition: {
        staggerChildren: 0.5,
      }
  },
    
  }
  const childVariant = {
    initial: {opacity: 0},
    animate: {opacity: 1}
  };

  const projects = [
    {
      imgUrl: './kgcomputers.png',
      title: 'KGComputers',
      description: 'An interactive eCommerce website with an admin dashboard for inventory and order management',
      previewUrl: 'https://kgcomputers.netlify.app/',
      githubUrl: 'https://github.com/nathanmdj/KGComputers-MP2-',
      stack: ['React', 'SASS', 'Bootstrap', 'NodeJS', 'Express', 'MongoDB', 'Chart.js']
    },
    {
      imgUrl: './devX.png',
      title: 'DevX',
      description: 'A social media platform for developers with a real-time chat application using Pusher',
      previewUrl: 'https://w95p.com/devX',
      githubUrl: 'https://github.com/nathanmdj/Capstone',
      stack: ['Laravel', 'Blade', 'SASS', 'Bootstrap','JQuery', 'PHP', 'MySql', 'WebSocket']
    },
    {
      imgUrl: './portfolio.png',
      title: 'Portfolio',
      description: 'Portfolio Website',
      previewUrl: 'https://portfolio-seven-zeta-32.vercel.app/',
      githubUrl: 'https://github.com/nathanmdj/portfolio',
      stack: ['React','Next.JS', 'Tailwind', 'shadcn/ui', 'Nodemailer', 'Framer Motion']
    },
    
  ]
  return (
    <section id='projects' className='pt-20 min-h-dvh'
      ref={inViewRef}
    >
      <motion.h2 className='text-center text-4xl font-bold text-white mb-5 xl:my-10'
        variants={childVariant}
        initial='initial'
        animate={inView ? 'animate' : 'initial'}
        transition={{duration: 1, delay: 0.3}}
      >My Projects</motion.h2>  
      <motion.ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12"
        variants={containerVariant}
        initial='initial'
        animate={inView ? 'animate' : 'initial'}
      >
        {projects.map((item, i)=>(
          <motion.li
            key={i}
            variants={childVariant}
          >
            <ProjectCard
            // key={i}
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
            previewUrl={item.previewUrl} 
            githubUrl={item.githubUrl} 
            stack={item.stack}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default ProjectSection