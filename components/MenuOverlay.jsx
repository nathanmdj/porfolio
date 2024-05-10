import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col pb-4 items-center text-xl gap-3'>
        {links.map((link, i) => (
            <li key={i}>
                <NavLink href={link.path} title={link.title}/>
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay