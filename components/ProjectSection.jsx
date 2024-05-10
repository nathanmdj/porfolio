import React from 'react'
import ProjectCard from './ProjectCard'
import { ExpressOriginalWordmark, JavascriptOriginal, JavascriptPlain, NodejsOriginalWordmark, NodejsPlainWordmark, ReactOriginalWordmark, SassOriginal } from 'devicons-react'

const ProjectSection = () => {
  const projects = [
    {
      imgUrl: './kgcomputers.png',
      title: 'KGComputers',
      description: 'eCommerce Website',
      previewUrl: 'https://kgcomputers.netlify.app/',
      githubUrl: 'https://github.com/nathanmdj/KGComputers-MP2-',
      stack: ['React', 'SASS', 'Bootstrap', 'NodeJS', 'Express', 'MongoDB', 'Chart.js']
    },
    {
      imgUrl: './devX.png',
      title: 'DevX',
      description: 'Social Media Website',
      previewUrl: 'https://w95p.com/devX',
      githubUrl: 'https://github.com/nathanmdj/Capstone',
      stack: ['Laravel', 'Blade', 'SASS', 'Bootstrap','JQuery', 'PHP', 'MySql', 'WebSocket']
    },
    {
      imgUrl: './portfolio.png',
      title: 'Portfolio',
      description: 'Portfolio Website',
      previewUrl: 'https://kgcomputers.netlify.app/',
      githubUrl: 'https://github.com/nathanmdj/KGComputers-MP2',
      stack: ['React','Next.JS', 'Tailwind', 'Nodemailer']
    },
    
  ]
  return (
    <section id='projects' className='pt-20 min-h-dvh'>
      <h2 className='text-center text-4xl font-bold text-white mb-5 xl:my-10'>My Projects</h2>  
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
        {projects.map((item, i)=>(
          <ProjectCard
          key={i}
          imgUrl={item.imgUrl}
          title={item.title}
          description={item.description}
          previewUrl={item.previewUrl} 
          githubUrl={item.githubUrl} 
          stack={item.stack}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection