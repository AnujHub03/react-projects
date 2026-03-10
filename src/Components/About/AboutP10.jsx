import React from "react";

const AboutP10 = () => {
  return (
    <>
      <div className="border-2 border-transparent p-5 rounded-xl bg-gray-500 bg-opacity-20 mt-10 w-9/12 m-auto">
        <h1 className="text-6xl p-3 "> Project 10</h1>
        <p className="text-2xl p-3 mt-4">
          📌 Project Description - Scroll Page with Window Size Tracker
        </p>
        <p className="text-xl p-2">
          This project is a simple React application that demonstrates page
          scrolling functionality and window size tracking. The application
          includes two buttons that allow users to smoothly scroll the page from
          top to bottom and from bottom to top. It also dynamically tracks and
          displays the current window width and height, updating automatically
          when the browser window is resized.
        </p>
        <p className="text-2xl p-4">🔹 Key Features</p>
        <p className="text-xl p-2">
          <ul className="list-disc list-inside">
            <li>Button to scroll to the top of the page</li>
            <li>Button to scroll to the bottom of the page</li>
            <li>Smooth scrolling animation</li>
            <li>Real-time window size tracking (width & height)</li>
            <li>Automatic update when the browser window is resized</li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default AboutP10;
