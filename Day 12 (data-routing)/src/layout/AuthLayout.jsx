import React from 'react'
import Login from '../pages/Login'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div>
      <Outlet/>              
      {/* outlet kabhi nahi bhoooolna kabhi bhi  */}
    </div>
  )
}

export default AuthLayout
