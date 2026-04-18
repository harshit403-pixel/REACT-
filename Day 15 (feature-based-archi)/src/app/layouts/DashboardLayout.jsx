import React, { use } from 'react'
import { Outlet, useLocation } from 'react-router'
import Navbar from '../../features/dashboard/components/Navbar'
import BreadCrumbs from '../../shared/components/BreadCrumbs'

const DashboardLayout = () => {
  let {pathname} = useLocation()
  return (

    <div className='flex gap-5' >
      <div className={` ${pathname === "/dashboard/employee/profile" ? "bg-black/70 p-6 absolute h-screen w-screen z-10 block" : "none"}`}></div>
        <Navbar/>
        
      <Outlet />
    </div>
  )
}

export default DashboardLayout
