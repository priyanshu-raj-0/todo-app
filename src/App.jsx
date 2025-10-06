import React from 'react'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DarkModeProvider } from './context/DarkModeContext';
import Home from './pages/Home'
import Todoapp from './pages/Todoapp'
import About from './pages/About'
import User from './pages/User'

const App = () => {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children: [
        {path:'/',element: <Home/>},
        {path:'/about',element: <About/>},
        {path:'/user',element: <User/>},
        {path:'/todo-app',element: <Todoapp/>}
      ]
    }
  ])

  return (
    <DarkModeProvider>
    <RouterProvider router={route}/>
    </DarkModeProvider>
  )
}

export default App
