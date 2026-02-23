import React from "react";

const AboutP4 = () => {
  return (
    <>
      <div className="border-2 border-transparent p-5 rounded-xl bg-gray-500 bg-opacity-20 mt-10 w-9/12 m-auto">
        <h1 className="text-6xl p-3 text-white"> Project 4</h1>
        <p className="text-2xl p-3 mt-4">
          📌 Project Description – Theme Toggle with Persistence
        </p>
        <p className="text-xl p-2">
          Implemented a light/dark theme switcher that saves the user’s selected
          theme using local storage and applies it on page reload.
        </p>{" "}
        <p className="text-2xl p-4">🔹 Key Features</p>
        <p className="text-xl p-2">
          <ul className="list-disc list-inside">
            <li>
              One-Click Theme Switch: Toggle between Light and Dark mode
              instantly.
            </li>
            <li>
              Theme Persistence: Stores the selected theme using local storage.
            </li>
            <li>
              Automatic Theme Load: Applies the saved theme when the page
              reloads.
            </li>
            <li>Smooth UI Transition: Clean and responsive user experience.</li>
            <li>
              Dynamic Class Handling: Updates styles by adding/removing CSS
              classes.
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default AboutP4;
