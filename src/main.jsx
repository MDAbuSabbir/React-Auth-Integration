import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layouts/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import Orders from './Components/Orders.jsx';
import Profile from './Components/Profile.jsx';
import Private from './Routs/Private.jsx';
import Dashboard from './Components/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Private> <Home></Home></Private>
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/orders",
        element: <Private> <Orders></Orders></Private>
      },
      {
        path: "/profile",
        element: <Private> <Profile></Profile></Private>
      },
      {
        path: "/dashboard",
        element: <Private> <Dashboard></Dashboard> </Private>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
)
