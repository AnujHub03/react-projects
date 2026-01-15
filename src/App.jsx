import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router';
import Navbar from './Components/MainDashboard/Navbar';
import HomePage from './Components/MainDashboard/Homepage';
import Project1 from './Components/Project 1/Project1';
import Project2 from './Components/Project 2/Project2';
import Project3 from './Components/Project 3/Project3';
import Project4 from './Components/Project 4/Project4';
import Tab from './Components/Project 5/Tab';

function App() {
  // const [count, setCount] = useState(0)

      const r=createBrowserRouter(
    createRoutesFromElements(
         <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<HomePage/>}></Route>

               {/* Easy Projects */}   
              <Route path='/Project1' element={<Project1/>}></Route>
              <Route path='/Project2' element={<Project2/>}></Route>
              <Route path='/Project3' element={<Project3 noOfStar={5}/>}></Route>
              <Route path='/Project4' element={<Project4/>}></Route>
              <Route path='/Project5' element={<Tab/>}></Route>

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
