import React from 'react'
import { Link, Outlet } from 'react-router'

const Navigationbar = () => {
  return (
   <>
      <div className="bg-gray-300">
        <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
          <Link to="/Navigationbar">
            <h1 className="ml-5 text-black font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              React Redux Shopping Cart
            </h1>
          </Link>
          <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
            <li className="cursor-pointer hover:text-orange-600">
              <Link to="/Navigationbar">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              <Link to="cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default Navigationbar