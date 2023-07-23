import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Login from './Components/Login/Login.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import AuthProvider from './Components/providers/AuthProvider.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Colleges from './Components/Colleges/Colleges.jsx';
import Details from './Components/Details/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/colleges",
        element: <Colleges/>
      },
      {
        path: "/details/:_id",
        element: <Details/>,
        loader: ({params}) => fetch(`http://localhost:5000/details/${params._id}`)
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path: "/profile",
        element: <Profile/>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </AuthProvider >
  </React.StrictMode>,
)
