import React from "react";

const AboutP1 = () => {
  return (
    <>
      <div className="border-2 border-transparent p-5 rounded-xl bg-gray-500 bg-opacity-20 mt-10 w-9/12 m-auto">
        <h1 className="text-6xl p-3 "> Project 1</h1>
        <p className="text-2xl p-3 mt-4">📌 Project Description </p>
        <p className="text-xl p-2">
          Developed an interactive card-based UI where users can click to view
          detailed information for a single card. Additionally, implemented a
          feature that allows multiple cards to be opened simultaneously for
          better comparison and usability. The project demonstrates dynamic
          content rendering and state management.
        </p>
        <p className="text-2xl p-4">🔹 Key Features</p>
        <p className="text-xl p-2">
          <ul className="list-disc list-inside">
            <li>
              Single Card View: Click on any card to expand and display its
              detailed information.
            </li>
            <li>
              Multiple Card View: A dedicated button allows users to open
              multiple cards at the same time.
            </li>
            <li>
              Dynamic UI Updates: Smooth interaction and state management for
              opening and closing cards.
            </li>
            <li>
              Responsive Design: Optimized layout for different screen sizes.
            </li>
            <li>
              User-Friendly Interface: Clean and intuitive design for better
              user experience.
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default AboutP1;
