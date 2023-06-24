import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SignUp/SignUp";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/login",
                element:<LogIn></LogIn>
            },
            {
                path: "/signup",
                element:<SignUp></SignUp>
            },
            {
                path: "/checkout/:id",
                loader: (params) => {
                    console.log(params);
                    return fetch(`https://genious-car-server-gold.vercel.app/services/${params.params.id}`)
                },
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: "/orders",
                element:<PrivateRoute><Orders></Orders></PrivateRoute>
            }
        ]
    }
])

export default router;