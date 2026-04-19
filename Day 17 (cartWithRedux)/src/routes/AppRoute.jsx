import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import Shop from "../pages/Shop";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import CartProducts from "../pages/CartProducts";

const AppRoute = () => {
    let router = createBrowserRouter([

        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <HomePage />
                },
                {
                    path: "shop",
                    element: <Shop />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path:"cart",
                    element:<CartProducts/>
                }
            ]
        }

    ])
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoute


