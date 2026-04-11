import React, { use, useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { UserContext } from '../context/BlogUser'

const Navbar = () => {

  const [nameWindow, setNameWindow] = useState(false)

  let{user, newUser} = useContext(UserContext)


  let navigate = useNavigate()


  return (
    <div className='h-[9%] fixed z-10 top-0 font-second w-full border-b bg-transparent   backdrop-blur-xl border-white/20 flex justify-center items-center  '>

      <div className='h-[9%] font-second min-w-[65%] flex justify-between items-center'>
            <NavLink
    className='flex gap-2'
    to= "/"
    >
      
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008c75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-line h-6 w-6 text-primary" aria-hidden="true"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
        <h1 className='font-second text-white font-bold text-xl ' >InkWell</h1>
      </NavLink>

      <div className='flex items-center  gap-2'>
        <button className='text-white cursor-pointer hover:bg-[#02493e] p-2 rounded-lg hover:text-black transition-all ease duration-250'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun h-4.5 w-4.5" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
        </button>
        
        <NavLink 
         className={`text-white cursor-pointer font-semibold hover:bg-[#02493e] py-1.5 px-4 rounded-lg hover:text-black transition-all ease duration-250 ${user ? 'hidden' : 'block'}`}
         to="/login"
        >
        
          Login
        </NavLink>

        <NavLink
        className={`text-black cursor-pointer hover:bg-[#0a6a5b] flex items-center justify-center bg-[#07957f] py-1.5 px-4 rounded-lg  transition-all ease duration-250 ${user ? 'hidden' : 'block'}`}
        to="/register"
        >
       
          Sign Up
        </NavLink >

        <div
        onClick={()=> setNameWindow((prev) => !prev)}
         className={`flex items-center relative gap-2 p-1 px-2 cursor-pointer rounded-lg transition duration-300 hover:bg-[#033830] ${user ? 'flex' : 'hidden'} `}>
          <span className='rounded-full  flex justify-center items-center text-black  h-[40px] w-[40px] bg-[#0a6a5b]'>{user?.name?.charAt(0) || newUser?.name?.charAt(0)}</span>
          <p className='text-white font-semibold'>{user?.name || newUser?.name}</p>
          
          <div
  className={`absolute top-[50px] right-5 w-[250px] pt-2 
  bg-[#0a0e11] border border-white/20 rounded-lg z-14
  transition-all duration-300 ease-out
  ${nameWindow 
    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
  }`}
>
          <div className='border-b py-2 border-white/20'>
            <h1 className='text-white text-[14px] pl-3 ' >{user && newUser.name}</h1>
            <p className='text-white/60 text-[12px] pl-3 '>{user && newUser.email}</p>
            <p className='text-white/60 text-[12px] pl-3 '>{user && newUser.accountType}</p>
          </div>
          <div
          onClick={()=> {navigate("/dashboard")}}
          className={`text-white items-center border-b border-white/20 pl-3 py-2 hover:bg-[#033830] cursor-pointer ${
  user?.accountType !== "user" ? "flex" : "hidden"
}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard mr-2 h-4 w-4" aria-hidden="true"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
            <p className='text-[14px]'>Dashboard</p>
          </div>
          <div 
          onClick={()=> { localStorage.removeItem("user"), window.location.reload()}}
          className='text-white flex items-center rounded-bl-lg rounded-br-lg pl-3 py-2 hover:bg-[#033830] cursor-pointer '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out mr-2 h-4 w-4" aria-hidden="true"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
            <p className='text-[14px]'>Logout</p>
          </div>
          </div>
        </div>
        
      </div>
      </div>
      

    </div>
  )
}

export default Navbar
