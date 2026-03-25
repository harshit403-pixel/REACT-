import React from 'react'

const navbar = ({setToggle , visible}) => {
  return (
    <div className='h-[10%] py-2 px-5 rounded bg-black flex justify-between items-center ' >
      <div className='h-[70%]'>
        <img
        className='h-full'
        src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
      </div>
      <div className='flex gap-10 text-white text-xl font-semibold '>
        <p>Home</p>
        <p>About</p>
        <p>Contacts</p>
      </div>
      <div>
        <button
        onClick={()=>{
            setToggle(prev => !prev)
        }}
        className='bg-blue-600 text-white py-2 px-4 cursor-pointer rounded active:scale-95'>
            {
                visible ? "Add user" : "Show User"
            }
            </button>
      </div>
    </div>
  )
}

export default navbar
