import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex py-4 justify-between px-10 w-full '>
      <h1>LOGO</h1>
      <div className='flex gap-10'>
        <NavLink to="/" >
            Home
        </NavLink>
        <NavLink to="/about" >
            About
        </NavLink>
        <NavLink to="/contact" >
            Contact
        </NavLink>
        
      </div>
      <NavLink to="/auth" >
        Login 
      </NavLink>
    </div>
  )
}

export default Navbar
