import React from 'react'

const AboutP2 = () => {
  return (
    <>
      <div className="border-2 border-transparent p-5 rounded-xl bg-gray-500 bg-opacity-20 mt-10 w-9/12 m-auto">
        <h1 className="text-6xl p-3 text-white"> Project 2</h1>
        <p className="text-2xl p-3 mt-4">📌 Project Description – Random Color Generator </p>
        <p className="text-xl p-2">
         Developed a color generator that creates random Hex (default) and RGB colors with a button click and updates the UI instantly.</p>
        
        <p className="text-2xl p-4">🔹 Key Features</p>
        <p className="text-xl p-2">
          <ul className="list-disc list-inside">
            <li>
              Generate Random Colors: Creates a new random color every time the
              "Generate" button is clicked.
            </li>
            <li>
              Hex Color Mode (Default): Generates and displays random
              hexadecimal color codes (e.g., #A3F4C1).
            </li>
            <li>
              RGB Color Mode: Switch to RGB format to generate colors like
              rgb(123, 45, 200).
            </li>
            <li>
              Dynamic Background Update: Instantly applies the generated color
              to the screen.
            </li>
            <li>
              Simple and Interactive UI: Clean design with easy format
              switching.
            </li>
          </ul>
        </p>
      </div>
    </>
  )
}

export default AboutP2