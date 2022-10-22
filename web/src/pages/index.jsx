import { useLocalStorage } from 'react-use'
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom"


import { Dashboard } from "./Dashboard";
import { Home } from "./Home";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { Signup } from "./Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/:username",
        element: <Profile />
    }
]);

export const Router = () => {

    const [auth] = useLocalStorage('auth')

    return <RouterProvider router={router} />
}