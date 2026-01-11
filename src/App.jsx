import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router';
import Navbar from './Components/MainDashboard/Navbar';
import HomePage from './Components/MainDashboard/Homepage';
import Project1 from './Components/Project 1/Project1';

function App() {
  // const [count, setCount] = useState(0)

      const r=createBrowserRouter(
    createRoutesFromElements(
         <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<HomePage/>}></Route>

              <Route path='/Project1' element={<Project1/>}></Route>

                {/* Navigate to Home Page When You hit a Undefined path / Url */}
                  <Route path='*' element={<Navigate to='/'></Navigate>}></Route>
                  </Route>
          )
  )
  return (
    <>
     <RouterProvider router={r}></RouterProvider> 
     
           
    
    </>
  )
}

export default App
