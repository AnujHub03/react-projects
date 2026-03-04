import React from "react";

const AboutP7 = () => {
  return (
    <>
      <div className="border-2 border-transparent p-5 rounded-xl bg-gray-500 bg-opacity-20 mt-10 w-9/12 m-auto">
        <h1 className="text-6xl p-3 "> Project 7</h1>
        <p className="text-2xl p-3 mt-4">
          📌 Project Description - Modal Popup on Button Click{" "}
        </p>
        <p className="text-xl p-2">
          The Modal Popup on Button Click is an interactive user interface
          component that displays a dialog box when a user clicks a button. The
          modal appears as an overlay on the webpage, focusing the user’s
          attention on specific content such as forms, messages, confirmations,
          or additional information.
        </p>
        <p className="text-2xl p-4">🔹 Key Features</p>
        <p className="text-xl p-2">
          <ul className="list-disc list-inside">
            <li>Reusable and customizable component</li>
            <li>Smooth and responsive animation</li>
            <li>DOM selection and manipulation</li>
            <li>Background overlay effect</li>
            <li>Event handling</li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default AboutP7;
