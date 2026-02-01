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
import Project6 from './Components/Project 6/Project6';
import Project7 from './Components/Project 7/Project7';
import Project8 from './Components/Project 8/Project8';
import Project9 from './Components/Project 9/Project9';
import Project10 from './Components/Project 10/Project10';
import Project11 from './Components/Project 11/Project11';
import Navigation from './Components/Project 12/Navbar/Navigation';
import Project12 from './Components/Project 12/Home/Project12';
import Details from './Components/Project 12/Details/Details';
import Favorites from './Components/Project 12/Favorites/Favorites';

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

              {/* Medium Projects */}
              <Route path='/Project6' element={<Project6/>}></Route>
              <Route path='/Project7' element={<Project7/>}></Route>
              <Route path='/Project8' element={<Project8/>}></Route>
              <Route path='/Project9' element={<Project9/>}></Route>
              <Route path='/Project10' element={<Project10/>}></Route>
              <Route path='/Project11' element={<Project11/>}></Route>

              {/* Hard Projects */}
             <Route path='/Navigation' element={<Navigation/>}>
                <Route path='/Navigation' element={<Project12/>}></Route>
                <Route path='details/:id' element={<Details/>}></Route>
                <Route path='favorites' element={<Favorites/>}></Route>
             </Route>

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
