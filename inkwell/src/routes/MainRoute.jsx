import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const MainRoute = () => {


    let router = createBrowserRouter([

        {
            path: "",
            element: <MainLayout />,
            children : [
                {
                    path: "",
                    element : <Home />
                },
                {
                    path:"login",
                    element : <Login/>
                },
                {
                    path:"register",
                    element : <Register/>
                }
            ]
        }

    ])

  return (<RouterProvider router={router} />)
}

export default MainRoute



