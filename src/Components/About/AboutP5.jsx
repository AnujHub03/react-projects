import React from "react";

const AboutP5 = () => {
  return (
    <>
      <div className="border-2 border-transparent p-5 rounded-xl bg-gray-500 bg-opacity-20 mt-10 w-9/12 m-auto">
        <h1 className="text-6xl p-3 text-white"> Project 5</h1>
        <p className="text-2xl p-3 mt-4">
          📌 Project Description – Dynamic Tab Navigation System{" "}
        </p>
        <p className="text-xl p-2">
          Designed a tab-based interface that dynamically displays content based
          on the selected tab without reloading the page.
        </p>
        <p className="text-2xl p-4">🔹 Key Features</p>
        <p className="text-xl p-2">
          <ul className="list-disc list-inside">
            <li>
              Multiple Tabs on a Single Page: Organizes content into separate
              sections.
            </li>
            <li>
              Dynamic Content Display: Shows only the selected tab’s content.
            </li>
            <li>
              Active Tab Highlighting: Visually indicates the currently selected
              tab.
            </li>
            <li>No Page Reload Required: Content updates using JavaScript.</li>
            <li>Clean and Responsive Design: Works smoothly across devices</li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default AboutP5;
