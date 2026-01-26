import React from 'react'
import { NavLink, Outlet } from 'react-router'

const Navigation = () => {
  return (
    <>
      <div className="navbar bg-gray-400 shadow-sm flex flex-col md:flex-row">

        {/* Top row: Logo + Search */}
        <div className="flex w-full flex-col md:flex-row md:items-center">

          {/* Logo */}
          <div className="navbar-start md:w-auto">
            <NavLink
              to="Project12"
              className="btn bg-slate-800 text-gray-200 hover:shadow-slate-300 hover:shadow-lg  hover:translate-x-1 transition-shadow duration-300 text-xl "
            >
              Food Recipe App.
            </NavLink>
          </div>

          {/* Search */}
          <div className="navbar-center w-full md:flex-1 mt-2 md:mt-0">
            <form className="w-full flex justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered w-full max-w-md"
              />
            </form>
          </div>
        </div>

        {/* Bottom on mobile, right on desktop */}
        <div className="navbar-end w-full md:w-96 mt-2 md:mt-0">
          <ul className="menu menu-horizontal flex justify-center md:justify-end gap-2 text-xl text-black">
            <li className="hover:bg-teal-400 rounded-xl">
              <NavLink to="Project12">Home</NavLink>
            </li>
            <li className="hover:bg-teal-400 rounded-xl">
              <NavLink to="details">Details</NavLink>
            </li>
            <li className="hover:bg-teal-400 rounded-xl">
              <NavLink to="favorites">Favorites</NavLink>
            </li>
            <li>
              {/* <a>Portfolio</a> */}
            </li>
          </ul>
        </div>

      </div>

      <Outlet />
    </>
  )
}

export default Navigation
