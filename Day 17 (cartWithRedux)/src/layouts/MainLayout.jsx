import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='h-screen w-screen  overflow-x-hidden '>
        <Navbar />
        <Outlet />
    </div>
    

  )
}

export default MainLayout
