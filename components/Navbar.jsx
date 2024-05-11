"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const navLinks = [
    {
      title: 'About',
      path: '#about',
    },
    {
      title: 'Projects',
      path: '#projects',
    },
    {
      title: 'Contact',
      path: '#contact',
    },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 bg-[#121212] border-b border-opacity-80 border-gray-500 ${navbarOpen ? '' : 'bg-opacity-90'}`}>
      <div className='flex flex-wrap items-center justify-between py-4 mx-auto px-4 md:mx-[5vw] 2xl:mx-[8vw]'>
        <Link href={'/'}
          className='text-3xl md:text-4xl text-orange-700 font-semibold'
        >{'<JM/>'}</Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'
             onClick={()=>setNavbarOpen(false)}
            >
              <XMarkIcon className='h-5 w-5'/>
            </button>
          ) : (
            <button className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'
              onClick={()=>setNavbarOpen(true)}
            >
             <Bars3Icon className='h-5 w-5'/>
            </button>
          )}
        </div>  
        <div className="menu hidden md:block md:w-auto" id='navbar'>
          <ul className='flex gap-5'>
            {
              navLinks.map((link, i) => (
                <li key={i} >
                  <NavLink href={link.path} title={link.title}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar