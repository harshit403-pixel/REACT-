import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuthContext } from '../../shared/hooks/useAuthContext'

const ProtectedRoute = () => {

    let{loggedInAdmins} = useAuthContext()

    if(!loggedInAdmins){
        return <Navigate to="/" />
    }
  return (
    
      <Outlet/>
  
  )
}

export default ProtectedRoute
