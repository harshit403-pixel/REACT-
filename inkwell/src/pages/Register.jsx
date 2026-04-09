import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../context/BlogUser'

const Register = () => {

      let {setNewUser , setUser} = useContext(UserContext)
        
        let navigate = useNavigate()
    
        let {register, handleSubmit, reset, formState:{errors, isValid}} = useForm({mode: "onChange"})
    
    
        let onSubmit = ((data) => {
            setNewUser(data)
            setUser(data)
            localStorage.setItem("newUser", JSON.stringify(data))
            localStorage.setItem("user", JSON.stringify(data))
             navigate("/")
            reset()
        })
    
    
  return (
        <div className='h-full w-full mt-20 flex items-center justify-center '>
      <div className='border  rounded-xl bg-[#0a0e11] border-white/20  p-5 justify-center items-center flex flex-col gap-5 md:w-[30%]  '>
     <div className='flex flex-col gap-2 justify-center items-center'>
         <div className='p-3 text-black rounded-full bg-[#008c75]' >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-line h-6 w-6 text-primary-foreground" aria-hidden="true"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
</div>
        <h1 className='text-xl text-white font-semibold font-second'>Create an Account</h1>
        <p className='text-white/60 text-[15px] font-second'>Join Inkwell to start reading or writing</p>

     </div>
     <form 
     onSubmit={handleSubmit(onSubmit)}
     className='flex flex-col gap-2 text-white w-full font-second px-1'>

            <div className='text-white w-full flex flex-col gap-1 font-second px-1 '>
        <p>Name</p>
        <input 
        {...register("name", {required: "Name is required"})}
        className='border w-full px-1.5 border-white/10 bg-[#12161a] text-white py-2   rounded  active:outline-none focus:outline-none focus:ring-2 focus:ring-[#008c75] focus:border-transparent  '
        type="text" placeholder='Enter your name' />
        <p className='text-red-500 text-[12px]'>{errors.name?.message}</p>
     </div> 


     <div className='text-white w-full flex flex-col gap-1 font-second px-1 '>
        <p>Email</p>
        <input 
        {...register("email", {required: "Email is required"})}
        className='border w-full px-1.5 border-white/10 bg-[#12161a] text-white py-2   rounded  active:outline-none focus:outline-none focus:ring-2 focus:ring-[#008c75] focus:border-transparent  '
        type="email" placeholder='you@example.com' />
        <p className='text-red-500 text-[12px]'>{errors.email?.message}</p>
     </div>
     <div className='text-white w-full flex flex-col gap-1 font-second px-1 '>
        <p>Password</p>
        <input 
        {...register("password", {required: "Password is required", minLength: {value: 6, message: "Password must be at least 6 characters"}})}
        className='border w-full px-1.5 border-white/10 bg-[#12161a] text-white py-2   rounded active:outline-none focus:outline-none focus:ring-2 focus:ring-[#008c75] focus:border-transparent   '
        type="password" placeholder='Enter your password' />
        <p className='text-red-500 text-[12px]'>{errors.password?.message}</p>
     </div>
     <div className='text-white w-full flex flex-col gap-1 font-second px-1 '>
        <p>Confirm Password</p>
        <input 
        {...register("confirmPassword", {required: "Please confirm your password", minLength: {value: 6, message: "Password must be at least 6 characters"}})}
        className='border w-full px-1.5 border-white/10 bg-[#12161a] text-white py-2   rounded active:outline-none focus:outline-none focus:ring-2 focus:ring-[#008c75] focus:border-transparent   '
        type="password" placeholder='Confirm your password' />
        <p className='text-red-500 text-[12px]'>{errors.confirmPassword?.message}</p>
     </div>

     <div className='text-white w-full flex flex-col gap-1 font-second px-1 '>
        <p>Account Type</p>
        <select 
        {...register("accountType", {required: "Please select an account type"})}
        className='border w-full px-1.5 border-white/10 bg-[#12161a] text-white py-2   rounded  active:outline-none focus:outline-none focus:ring-2 focus:ring-[#008c75] focus:border-transparent  '
        >
            <option value="">Select an account type</option>
            <option value="user">User</option>
            <option value="author">Author</option>
        </select>
        <p className='text-red-500 text-[12px]'>{errors.accountType?.message}</p>
     </div>
    

     

     <button
     className='bg-[#008c75] w-full text-black py-2 px-4 rounded-md hover:bg-[#006d5a] cursor-pointer transition duration-200 '>
       Create Account
     </button>
     </form>


     <p className='text-white/60 text-[15px] font-second'>Don't have an account? <span
         onClick={() => navigate("/login")}
     className='text-[#008c75] hover:underline cursor-pointer'>Sign in</span></p>





      </div>





    </div>
  )
}

export default Register
