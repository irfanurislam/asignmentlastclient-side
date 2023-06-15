import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Instructors from "../pages/Instructors/Instructors";
import ClassesPage from "../pages/ClassesPage/ClassesPage"
import Dashboard from "../layouts/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import PrivateRouters from "./PrivateRouters";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/MyClass/MyClass";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import AdminRouter from "./AdminRouter";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import MyEnrolled from "../pages/Dashboard/Enrolled/MyEnrolled";
import UpdateClass from "../pages/Dashboard/Update/UpdateClass";
import PaymentHistory from '../pages/Dashboard/Payment/PaymentHistory';
import InstructorRoute from "./InstructorRoute";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
        path: '/',
        element: <Home></Home>,
        
      },
        {
        path: '/instructors',
        element: <Instructors></Instructors>,
        
      },
        {
        path: '/classespage',
        element: <ClassesPage></ClassesPage>,
        
      },
        {
        path: '/login',
        element: <Login></Login>,
        
      },
        {
        path: '/signup',
        element: <SignUp></SignUp>,
        
      }
    
    
    
    ]
    },

    {
      path: '/dashboard',
      element: <PrivateRouters><Dashboard></Dashboard></PrivateRouters>,
      children: [
        {
          path: 'adminhome',
          element:<AdminRouter><AdminHome></AdminHome></AdminRouter>,
        },
        {
          path: 'addclass',
          element:<InstructorRoute><AddClass></AddClass></InstructorRoute>,
        },
        {
          path: 'myclass',
          element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>,
        },
        {
          path: 'mycart',
          element:<MyCart></MyCart>,
        },
        {
          path: 'manageuser',
          element:<AdminRouter><ManageUser></ManageUser></AdminRouter>,
        },
        {
          path: 'manageclass',
          element:<AdminRouter><ManageClass></ManageClass></AdminRouter>,
        },
        {
          path: 'payment/:id',
          element:<Payment></Payment>,
        },
        {
          path: 'myenrolled',
          element:<MyEnrolled></MyEnrolled>,
        },
        {
          path: 'paymenthistory',
          element:<PaymentHistory></PaymentHistory>,
        },
        {
          path: 'updateclass/:id',
          element:<InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>,
          loader:({params}) => fetch(`https://side-of-server.vercel.app/myclass/${params.id}`)
        },
      ]
    }





  ]);

