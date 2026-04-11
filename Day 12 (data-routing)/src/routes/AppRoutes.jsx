import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import MainLayout from '../layout/MainLayout'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/Login'
import Signin from '../pages/Signin'


const AppRoutes = () => {

    let yahajowahirouter = createBrowserRouter([            //1st step multiple routes so array

        {
         path :"/",
         element :<MainLayout />,
         children:[
            {
                path:"",
                element:<Home /> 
            },
            {
                path:"about",                            // "/about" / nahi ata hai childrens mai
                element : <About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },

         ]
        },
        {
            path:"/auth",
            element:<AuthLayout/>,
            children:[

                {
                    path:"",
                    element : <Login/>
                },

                {
                    path:"signin",
                    element : <Signin/>
                }

            ]
        }

    ])

  return (
    <RouterProvider router={yahajowahirouter}/>
  )
}

export default AppRoutes
