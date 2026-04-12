import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../Layouts/MainLayout'
import Home from '../Pages/Home'
import Skeleton from '../Pages/Skeleton'
let About = lazy(()=> import("../Pages/About"))
let Product = lazy(()=> import("../Pages/Product"))
let User = lazy(()=> import("../Pages/User"))


const AppRoute = () => {

    let router = createBrowserRouter([
        {
            path: "/",
            element : <MainLayout/>,
            children:[
                {
                    index : true,
                    element : <Home/>
                },
                {
                    path: "about",
                    element : <Suspense fallback={<Skeleton/>}>
                        <About/>
                    </Suspense>
                },
                {
                    path: "product",
                    element : <Product/>
                },
                {
                    path: "user",
                    element : <User/>
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoute
