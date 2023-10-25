import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, Outlet, redirect, RouterProvider } from 'react-router-dom'
import AboutMe from './components/pages/about-me/AboutMe'
import './index.css'
import Contact from './components/pages/contact/Contact'
import Experience from './components/pages/experience/Experience'
import Resume from './components/pages/resume/Resume'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Navigate to="/about-me" replace/>
          },
          {
            path: "about-me",
            element: <AboutMe />
          },
          {
            path: "contact",
            element: <Contact />
          },
          {
            path: "experience",
            element: <Experience />
          },
          {
            path: "resume",
            element: <Resume />
          }
        ]
      }
      
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
