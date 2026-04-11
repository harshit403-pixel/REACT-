import React from 'react'
import { NavLink } from 'react-router'

const Login = () => {
  return (
    <div>
      <h1>LOGINNNN</h1>
      <h1>Youre not already memeber</h1>
      <NavLink to ="/auth/signin" >
        SignIN
      </NavLink>
    </div>
  )
}

export default Login
