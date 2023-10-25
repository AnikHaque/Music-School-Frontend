import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../LayOut/Main';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Dashboard from '../LayOut/DashBoard/Dashboard';
import PrivateRoute from './PrivateRoute';
import Classes from '../Pages/Classes/Classes';
import InstructorPages from '../Pages/Instructors/InstructorPages';
import MyCart from '../LayOut/DashBoard/MyCart';
import MyEnroll from '../LayOut/DashBoard/MyEnroll';
import ManageUsers from '../LayOut/DashBoard/ManageUsers';
import AdminPrivateRoute from './AdminPrivateRoute';
import ManageClasses from '../LayOut/DashBoard/ManageClasses';
import AddClasses from '../LayOut/DashBoard/AddClasses';
import InstructorPrivateRoute from './InstructorPrivateRoute';
import Payment from '../LayOut/DashBoard/Payment';
import MyClasses from '../LayOut/DashBoard/MyClasses';
import EditClasses from '../LayOut/DashBoard/EditClasses';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "/instructors",
          element: <InstructorPages></InstructorPages>
        },
        {
          path: "/classes",
          element:<Classes></Classes>
        }
      ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: 'myCart',
            element: <MyCart></MyCart>
          },
          {
            path: 'myEnroll',
            element: <MyEnroll></MyEnroll>
          },
          {
            path: 'payment',
            element: <Payment></Payment>
          },
          {
            path: 'manageUsers',
            element: <AdminPrivateRoute><ManageUsers></ManageUsers></AdminPrivateRoute>
          },
          {
            path: 'manageClasses',
            element: <AdminPrivateRoute><ManageClasses></ManageClasses></AdminPrivateRoute>
          },
          {
            path: 'addClasses',
            element: <InstructorPrivateRoute><AddClasses></AddClasses></InstructorPrivateRoute>
          },
          {
            path: 'editClass/:id',
            element: <EditClasses></EditClasses>,
            loader: ({params}) => fetch(`https://summer-camp-server-green.vercel.app/instructor-class/${params.id}`)
          },
          {
            path: 'myClasses',
            element: <InstructorPrivateRoute><MyClasses></MyClasses></InstructorPrivateRoute>
          }
        ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;