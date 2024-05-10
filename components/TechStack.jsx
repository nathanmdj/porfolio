import { BootstrapOriginal, BootstrapOriginalWordmark, Css3Original, ExpressOriginal, ExpressOriginalWordmark, Html5Original, JavascriptOriginal, LaravelLineWordmark, LaravelOriginal, LaravelOriginalWordmark, MongodbOriginal, MongodbOriginalWordmark, MysqlOriginal, MysqlOriginalWordmark, NextjsOriginal, NextjsOriginalWordmark, NodejsOriginal, NodejsOriginalWordmark, PhpOriginal, ReactOriginal, ReactOriginalWordmark, SassOriginal, TailwindcssOriginal, TypescriptOriginal } from 'devicons-react'
import React from 'react'

const TechStack = () => {
  return (
    <section className='pt-10 2xl:mt-20'>
      <h2 className='text-center text-4xl font-bold text-white mb-5'>Skills</h2>
      <div className="flex gap-5 md:gap-10 justify-center flex-wrap">
        <Html5Original size={60}/>
        <Css3Original size={60}/>
        <SassOriginal size={60}/>
        <BootstrapOriginalWordmark size={60}/>
        <TailwindcssOriginal size={60}/>
        <JavascriptOriginal size={60}/>
        <TypescriptOriginal size={60}/>
        
      </div> 
      <div className="flex gap-5 md:gap-10 justify-center mt-10 flex-wrap">
        <ReactOriginalWordmark size={60}/>
        <NextjsOriginalWordmark size={60} className='bg-gray-300 rounded-full p-2'/>
        <NodejsOriginalWordmark size={60}/>
        <ExpressOriginalWordmark size={60} className='bg-gray-300 rounded-full p-2'/>
        <MongodbOriginalWordmark size={60}/>
        <LaravelOriginalWordmark size={60}/>
        <PhpOriginal size={60}/>
        <MysqlOriginalWordmark size={60}/>
      </div>
    </section>
  )
}

export default TechStack