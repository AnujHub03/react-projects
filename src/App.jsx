import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router';

function App() {
  // const [count, setCount] = useState(0)

      const r=createBrowserRouter(
    createRoutesFromElements(
        
    )
  )
  return (
    <>
     <RouterProvider router={r}></RouterProvider> 
  
    
    </>
  )
}

export default App
