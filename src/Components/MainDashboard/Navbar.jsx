import React, { useRef, useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation();
  const detailsRefs = useRef([]);

  // Close all details elements when route changes
  useEffect(() => {
    detailsRefs.current.forEach(details => {
      if (details && details.hasAttribute('open')) {
        details.removeAttribute('open');
      }
    });
  }, [location]);

  // Close details when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      detailsRefs.current.forEach(details => {
        if (details && 
            details.hasAttribute('open') && 
            !details.contains(event.target)) {
          details.removeAttribute('open');
        }
      });
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Function to close all details elements
  const closeAllDetails = () => {
    detailsRefs.current.forEach(details => {
      if (details && details.hasAttribute('open')) {
        details.removeAttribute('open');
      }
    });
  };

  // Add ref to each details element
  const addToRefs = (el) => {
    if (el && !detailsRefs.current.includes(el)) {
      detailsRefs.current.push(el);
    }
  };

  return (
   <>
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      {/* min Screen Side Navbar */}
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  bg-orange-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li>
          <a>Easy Projects</a>
          <ul className="p-2 fontCustom">
             <li className="hover:bg-orange-600 rounded-xl active:bg-primary" onClick={closeAllDetails}><NavLink to="/Project1">Project 1</NavLink></li>
             <li className="hover:bg-orange-600 rounded-xl active:bg-primary" onClick={closeAllDetails}><NavLink to="/Project2">Project 2</NavLink></li>
         </ul>
        </li>
        <li>
          <a>Medium Projects</a>
          <ul className="p-2">
          
          </ul>
        </li>
        <li>
          <a>Hard Projects</a>
          <ul className="p-2">
                 </ul>
        </li>
        
      </ul>
    </div>
    <NavLink className="btn btn-ghost text-xl hover:bg-orange-600 " to="/" onClick={closeAllDetails}>Anuj Hooda</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" flex gap-10 w-98 menu-horizontal px-1">
      <li>
        <details ref={addToRefs}>
          <summary className="cursor-pointer">Easy Projects</summary>
          <ul className="p-2 w-28 text-center">
             <li className="hover:bg-orange-600 rounded-xl active:bg-primary" onClick={closeAllDetails}><NavLink to="/Project1">Project 1</NavLink></li>
             <li className="hover:bg-orange-600 rounded-xl active:bg-primary" onClick={closeAllDetails}><NavLink to="/Project2">Project 2</NavLink></li>
         </ul>
        </details>
      </li>
      <li>
        <details ref={addToRefs}>
          <summary className="cursor-pointer">Medium Projects</summary>
          <ul className="p-2">
          </ul>
        </details>
      </li>
      <li>
        <details ref={addToRefs}>
          <summary className="cursor-pointer">Hard Projects</summary>
          <ul className="p-2">
                      </ul>
        </details>
      </li>
      
    </ul>
  </div>
</div>
<Outlet/>
   </>
  )
}

export default Navbar