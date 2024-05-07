"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'

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
    <nav className='fixed top-0 z-10 bg-[#121212] bg-opacity-90 container'>
      <div className='flex flex-wrap items-center justify-between py-5 pe-20'>
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
                <li key={i}>
                  <NavLink href={link.path} title={link.title}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar