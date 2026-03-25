import React from 'react'
import {useForm} from 'react-hook-form'
const ReactHookForm = () => {
    let {register , handleSubmit, reset} = useForm()
   
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1>React Hook form</h1>

      <form
      onSubmit={handleSubmit((data)=>{
          console.log(data)
          reset()
      })}
      className='flex flex-col justify-center items-center gap-3' action="">
        <input
        {...register ("name")} //bas itna hi karna hai  iske alwa kuch nai 
        className='border p-2 rounded' type="text" placeholder='Name' />
        <input
        {...register ("Email")}
        className='border p-2 rounded' type="text" placeholder='Email' />
        <button className='bg-blue-700 py-2 px-4 text-white rounded cursor-pointer ' >Submit</button>
      </form>
    </div>
  )
}

export default ReactHookForm
