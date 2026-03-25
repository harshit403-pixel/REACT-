// FORM HANDLING METHOD 4 ::::::::::::::::::::::::::
// USING useRef() - No RERENDER 
// METHOD 5 in Method 5 


import React, { useRef } from 'react'
import { useState } from 'react'

const App = () => {


  let inpRef = useRef({})
  console.log(inpRef)


  return (
    <div className='h-screen flex flex-col bg-black/90 gap-5 justify-center items-center'>
      <h1 className='text-white text-3xl font-bold'>APP</h1>

      <form
      onSubmit={(e)=>{
        console.log(inpRef.current.name.value)
        console.log(inpRef.current.password.value)
        console.log(inpRef.current.email.value)
        console.log(inpRef.current.mobile.value)
        e.preventDefault()
      }}
      className=' text-white border-2 flex flex-col gap-2 border-gray-500 p-5 rounded-2xl w-[25%]' action="">
        <div className='flex flex-col gap-4'>
          <label className=' text-xl font-semibold' htmlFor="">Name</label>
          <input
          name='name'
          ref={(e)=>{
            inpRef.current.name = e
          }}
          className='bg-gray-300 p-2 rounded text-black' type="text" placeholder='John Doe' />
        </div>
        <div className='flex flex-col gap-2'>
          <label className=' text-xl font-semibold' htmlFor="">Password</label>
          <input
                    name='password'
          ref={(e)=>{
            inpRef.current.password = e
          }}
          className='bg-gray-300 p-2 rounded text-black' type="text" placeholder='1234565' />
        </div>
        <div className='flex flex-col gap-2'>
          <label className=' text-xl font-semibold' htmlFor="">Email</label>
          <input
                     name='email'
          ref={(e)=>{
            inpRef.current.email = e
          }}
          className='bg-gray-300 p-2 rounded text-black' type="text" placeholder='John@email.com' />
        </div>
        <div className='flex flex-col gap-2'>
          <label className=' text-xl font-semibold' htmlFor="">Number</label>
          <input
                     name='mobile'
          ref={(e)=>{
            inpRef.current.mobile = e
          }}
          className='bg-gray-300 p-2 rounded text-black' type="text" placeholder='898023632' />
        </div>
        <button className='bg-blue-600 p-2 rounded text-white font-semibold'>Submit</button>
      </form>

    </div>
  )
}

export default App
