import { createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "../Layout/DashboardLayout";

import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Books from "../Pages/Books/Books";
import AddBook from "../Pages/Dashbord/AddBook/AddBook";
import AllBuyers from "../Pages/Dashbord/AllBuyers/AllBuyers";
import Myorders from "../Pages/Dashbord/AllBuyers/Myorders/Myorders";
import Allsellers from "../Pages/Dashbord/AllSellers/Allsellers";
import Dashbord from "../Pages/Dashbord/Dashbord";
import MyProducts from "../Pages/Dashbord/MyProducts/MyProducts";
import Reporteditem from "../Pages/Dashbord/ReportedItem/Reporteditem";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ForbiddenAccess from "../Pages/ForbiddenAccess/ForbiddenAccess";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Payment from "../Pages/Payment/Payment";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./PrivateRoutes";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/books/:categoryName',
                element: <PrivateRoutes><Books></Books></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://boi-bazar-server.vercel.app/books/${params.categoryName}`)
            },
            {
                path: '/forbidden',
                element: <ForbiddenAccess></ForbiddenAccess>
            }
        ],

    },
    {
        path: '/dashbord',
        element: <PrivateRoutes><DashboardLayOut></DashboardLayOut></PrivateRoutes>,
        children: [
            {
                path: '/dashbord',
                element: <Dashbord></Dashbord>
            },
            {
                path: '/dashbord/allsellers',
                element: <AdminRoute><Allsellers></Allsellers></AdminRoute>
            },
            {
                path: '/dashbord/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashbord/addbook',
                element: <SellerRoute><AddBook></AddBook></SellerRoute>
            },
            {
                path: '/dashbord/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashbord/reportedItem',
                element: <Reporteditem></Reporteditem>
            },
            {
                path: '/dashbord/myorders',
                element: <Myorders></Myorders>
            },
            {
                path: '/dashbord/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://boi-bazar-server.vercel.app/bookings/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }


])
export default router