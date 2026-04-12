import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='h-[10%] w-full flex justify-between px-20 bg-black'>
      <h1
      
      className='text-white'>LOGO</h1>


      <div className='flex gap-5'>
        <NavLink
        className={({isActive})=> isActive? "text-red-500 font-bold" : "text-white" }
        to="/"
        >
            Home
        </NavLink>
        <NavLink
        className={({isActive})=> isActive? "text-red-500 font-bold" : "text-white" }
        to="/about"
        >
            About
        </NavLink>
        <NavLink
        className={({isActive})=> isActive? "text-red-500 font-bold" : "text-white" }
        to="/product"
        >
            Product
        </NavLink>
        <NavLink
        className={({isActive})=> isActive? "text-red-500 font-bold" : "text-white" }
        to="/user"
        >
            User
        </NavLink>
      </div>
      
      
          </div>
  )
}

export default Navbar
