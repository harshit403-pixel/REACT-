import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../features/dashboard/components/Navbar'

const DashboardLayout = () => {
  return (
    <div className='flex gap-5' >
        <Navbar/>
      <Outlet />
    </div>
  )
}

export default DashboardLayout
