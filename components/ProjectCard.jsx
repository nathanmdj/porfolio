import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const ProjectCard = ({imgUrl, title, description, previewUrl, githubUrl, stack}) => {
  return (
    <div>
      <div 
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{background: `url(${imgUrl})`, backgroundSize: 'cover'}}>
        <div className="overlay items-center justify-center gap-3 absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={githubUrl} target='_blank' 
                  className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                >
                  <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Code</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={githubUrl} target='_blank' 
                  className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                >
                  <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Live Preview</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] p-4">
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
        <div className="flex gap-3 mt-3 flex-wrap text-xs md:text-sm justify-center">
          {stack.map((item, i)=>(
            <div 
              key={i}
              className="bg-green-600 p-2 rounded-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
     
    </div>
  )
}

export default ProjectCard