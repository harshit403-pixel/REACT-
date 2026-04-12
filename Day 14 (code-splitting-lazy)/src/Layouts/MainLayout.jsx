import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const MainLayout = () => {
  return (
    <div className='h-screen w-screen '>
        <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
