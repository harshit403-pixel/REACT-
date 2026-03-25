import React from 'react'

const Navbar = ({setToggle , toggle}) => {
  return (
    <div className='h-[10%] bg-red-600 flex items-center justify-between px-10 text-white' >
        <h1 className='font-semibold text-2xl'>Dream 11</h1>
        <h1 className='font-semibold text-xl'>Make Your Dream Team</h1>
        <button
        onClick={()=>{
            setToggle((prev)=> !prev)
        }}
        className='font-semibold bg-white text-red-600 px-3 py-1 rounded-md hover:text-white hover:bg-red-950 transition-all ease-in cursor-pointer active:scale-98'>{toggle ? "Add Player" : "Show My Team" }</button>
      
    </div>
  )
}

export default Navbar
