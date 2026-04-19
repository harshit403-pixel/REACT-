import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='h-[10%] text-lg font-semibold bg-black/20  flex items-center justify-between px-10'>
      <div>
        LOGO
      </div>
      <div className='flex gap-10 '>
        <NavLink
        className={({isActive})=> isActive? "text-green-600 font-semibold": "text-black"}
        to="/">Home</NavLink>
        <NavLink
        className={({isActive})=> isActive? "text-green-600 font-semibold": "text-black"}
        to="/shop">Shop</NavLink>
        <NavLink
        className={({isActive})=> isActive? "text-green-600 font-semibold": "text-black"}
        to="/about">About</NavLink>
      </div>

      <NavLink
       className={({isActive})=> isActive? "text-green-600 font-semibold": "text-black"}
        to="/cart">
        Cart

      </NavLink>
      


    </div>
  )
}

export default Navbar
