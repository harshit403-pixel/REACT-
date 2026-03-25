import React from 'react'
import { useState } from 'react'

const App = () => {

  //FORM HANDLING METHOD 1 :::::::::::::::::
  // brute force approach to handle form using useState for each input  saare inputs par saare usestate ko chnage krdenge  

  // const [name, setName] = useState("")
  // const [password, setPassword] = useState("")
  // const [mail, setMail] = useState("")
  // const [mobile, setMobile] = useState("")


    //FORM HANDLING METHOD 2 ::::::::::::::::: 
    let [formValues, setFormValues] = useState({
      name: "",
      password : "",
      email : "",
      mobile: ""
    })

    // FORM HANDLING METHOD 3 :::::::::::::::: in new folder Optimised.jsx
  return (
    <div className='h-screen flex flex-col bg-black/90 gap-5 justify-center items-center'>
      <h1 className='text-white text-3xl font-bold'>APP</h1>

      <form
      onSubmit={(e)=>{
        e.preventDefault()
        console.log(formValues)
      }}
      className=' text-white border-2 flex flex-col gap-2 border-gray-500 p-5 rounded-2xl w-[25%]' action="">
        <div className='flex flex-col gap-4'>
          <label className=' text-xl font-semibold' htmlFor="">Name</label>
          <input
          onChange={(e)=>{ setFormValues({...formValues, name : e.target.value })}}
          className='bg-gray-300 p-2 rounded text-black' type="text" placeholder='John Doe' />
        </div>
        <div className='flex flex-col gap-2'>
          <label className=' text-xl font-semibold' htmlFor="">Password</label>
          <input
          onChange={(e)=>{setFormValues({...formValues, password: e.target.value})}}
          className='bg-gray-300 p-2 rounded text-black' type="text" placeholder='1234565' />
        </div>
        <div className='flex flex-col gap-2'>
          <label className=' text-xl font-semibold' htmlFor="">Email</label>
          <input
          onChange={(e)=>{setFormValues({...formValues, email: e.target.value})}}
          className='bg-gray-300 p-2 rounded text-black' type="text" placeholder='John@email.com' />
        </div>
        <div className='flex flex-col gap-2'>
          <label className=' text-xl font-semibold' htmlFor="">Number</label>
          <input
           onChange={(e)=>{setFormValues({...formValues, mobile: e.target.value})}}
          className='bg-gray-300 p-2 rounded text-black' type="text" placeholder='898023632' />
        </div>
        <button className='bg-blue-600 p-2 rounded text-white font-semibold'>Submit</button>
      </form>

    </div>
  )
}

export default App
