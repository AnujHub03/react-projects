import React from "react";

const AboutP6 = () => {
  return (
    <>
      <div className="border-2 border-transparent p-5 rounded-xl bg-gray-500 bg-opacity-20 mt-10 w-9/12 m-auto">
        <h1 className="text-6xl p-3 "> Project 6</h1>
        <p className="text-2xl p-3 mt-4">
          📌 Project Description - Scroll Indicator{" "}
        </p>
        <p className="text-xl p-2">
          The Scroll Indicator is an interactive UI component designed to
          visually represent the user’s scroll progress on a webpage. It
          enhances user experience by providing real-time feedback on how much
          content has been viewed and how much remains.
        </p>
        <p className="text-2xl p-4">🔹 Key Features</p>
        <p className="text-xl p-2">
          <ul className="list-disc list-inside">
            <li>Real-time progress tracking</li>
            <li>Smooth and responsive animation</li>
            <li>DOM manipulation</li>
            <li>Scroll position calculations</li>
            <li>Event handling</li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default AboutP6;
