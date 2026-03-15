import React from 'react'

const AboutP12 = () => {
  return (
        <>
      <div className="border-2 border-transparent p-5 rounded-xl bg-gray-500 bg-opacity-20 mt-10 w-9/12 m-auto">
        <h1 className="text-6xl p-3 "> Project 12</h1>
        <p className="text-2xl p-3 mt-4">
          📌 Project Description - 🍔 Food Recipe App
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
            <li>🔎 Search Recipes: Users can search recipes by name or ingredient.</li>
            <li>🍲 Recipe Details: Shows ingredients, cooking steps, and images.</li>
            <li>📱 Responsive Design: Works on desktop, tablet, and mobile devices.</li>
            <li>⭐ Favorite Recipes (optional feature): Users can save their favorite recipes.</li>
            <li>🌍 Different Categories: Browse recipes by cuisine or meal type.</li>
          </ul>
        </p>
      </div>
    </>
  )
}

export default AboutP12