import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext";
const Navbar = () => {

  let {theme , setTheme } = useContext(ThemeContext)


  return (
    <div className={`h-[10%] ${theme === "light" ? "bg-blue-400" : "bg-black"} flex justify-between items-center px-20`} >
        
        <h1 className= {`font-semibold text-2xl ${theme === "light" ? "text-black" : "text-white" }`}>Theme Changer</h1>
        <button
        onClick={()=>{
          setTheme((prev) => prev === "light" ? "dark" : "light")
        }}
        className={`${theme === "light" ? "bg-black text-white" : "bg-white text-black" } rounded px-5 py-1 active:scale-95 cursor-pointer`} >
          {
            theme === "light" ? "Dark" : "Light"
          }
          </button>
      
    </div>
   
)
}

export default Navbar
