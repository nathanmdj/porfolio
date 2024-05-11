'use client'
import Link from "next/link"

const NavLink = ({href, title}) => {
 
  return (
    <Link 
      href={href}
      className="sm:text-xl text-[#ADB7BE] hover:text-white"
    >
      {title}
    </Link>
  )
}

export default NavLink