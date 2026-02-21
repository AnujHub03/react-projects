import React from 'react'

const AboutP3 = () => {
  return (
   <>
   <div className="border-2 border-transparent p-5 rounded-xl bg-gray-500 bg-opacity-20 mt-10 w-9/12 m-auto">
            <h1 className="text-6xl p-3 text-white"> Project 3</h1>
            <p className="text-2xl p-3 mt-4">📌 Project Description – Star Rating Review System </p>
            <p className="text-xl p-2">
                Created a star-based rating system where users can select, update, and store their review with interactive hover and click functionality.             </p>
            
            <p className="text-2xl p-4">🔹 Key Features</p>
            <p className="text-xl p-2">
                <ul className='list-disc list-inside'>
                    <li>Interactive Hover Effect: Users can preview their rating by hovering over the stars.</li>
                    <li>Click to Select Rating: Clicking on a star confirms and stores the selected rating</li>
                    <li>Dynamic State Update: Users can modify their rating anytime by selecting a new value.</li>
                    <li>User-Friendly UI: Simple and intuitive design for smooth interaction</li>
                    <li>Real-Time Visual Feedback: Selected stars remain highlighted to reflect the saved rating.</li>
                </ul>
            </p>
            
          </div>
          
          </>
  )
}

export default AboutP3