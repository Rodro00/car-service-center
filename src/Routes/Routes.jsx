import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Booking from "../Pages/Booking/Booking";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/sign',
          element:<SignUp></SignUp>
        },
        {
          path:'/checkout/:id',
          element:<CheckOut></CheckOut>,
          loader: ({params})=> fetch(`http://localhost:1000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<PrivateRoutes><Booking></Booking></PrivateRoutes>,
        }
      ]
    },
  ]);


  export default router 