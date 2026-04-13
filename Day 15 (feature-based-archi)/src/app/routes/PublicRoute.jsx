import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuthContext } from '../../shared/hooks/useAuthContext'

const PublicRoute = () => {

    let{loggedInAdmins} = useAuthContext()

    if(loggedInAdmins){
        return <Navigate to="/dashboard" />
    }
  return (
    
      <Outlet/>
  
  )
}

export default PublicRoute
