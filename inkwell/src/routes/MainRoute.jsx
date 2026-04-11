import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Article from '../pages/Article'
import ArticleDetails from '../pages/ArticleDetails'

const MainRoute = () => {


    let router = createBrowserRouter([

        {
            path: "",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "login",
                    element: <Login />
                },
                {
                    path: "register",
                    element: <Register />
                },
                {
                    path: "dashboard",
                    element: <Dashboard />
                },
                {
                    path: "new-article",
                    element: <Article />
                },
                {
                    path: "article/detail/:id",
                    element: <ArticleDetails />
                }
            ]
        },

    ])

    return (<RouterProvider router={router} />)
}

export default MainRoute



