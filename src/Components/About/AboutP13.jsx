import React from 'react'

const AboutP13 = () => {
  return (
   <>
      <div className="border-2 border-transparent p-5 rounded-xl bg-gray-500 bg-opacity-20 mt-10 w-9/12 m-auto">
        <h1 className="text-6xl p-3 "> Project 13</h1>
        <p className="text-2xl p-3 mt-4">
          📌 Project Description - 🛒 React Redux Shopping Cart
        </p>
        <p className="text-xl p-2">
          The Food Recipe App is a web application developed using React.js that
          allows users to search, explore, and view detailed cooking recipes
          from different cuisines around the world. The app provides an easy and
          interactive interface where users can find recipes based on
          ingredients or dish names.
        </p>
        <p className="text-2xl p-4">🔹 Key Features</p>
        <p className="text-xl p-2">
          <ul className="list-disc list-inside">
            <li>🛍️ Product Listing: Displays a list of products with images and prices.</li>
            <li>➕ Add to Cart: Users can add products to the cart.</li>
            <li>➖ Remove from Cart: Users can remove items from the cart.</li>
            <li>🔢 Update Quantity: Increase or decrease product quantity.</li>
            <li>💰 Cart Total Calculation: Automatically calculates the total price.</li>
            <li>📱 Responsive UI: Works on mobile and desktop devices.</li>
          </ul>
        </p>
      </div>
    </>
  )
}

export default AboutP13