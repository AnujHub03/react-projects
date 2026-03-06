import React from "react";

const AboutP8 = () => {
  return (
    <>
      <div className="border-2 border-transparent p-5 rounded-xl bg-gray-500 bg-opacity-20 mt-10 w-9/12 m-auto">
        <h1 className="text-6xl p-3 "> Project 8</h1>
        <p className="text-2xl p-3 mt-4">
          📌 Project Description - Search Functionality Using API Data{" "}
        </p>
        <p className="text-xl p-2">
          This project is a dynamic search feature implementation in React that
          allows users to filter and display results from data fetched via an
          external API. The application demonstrates efficient state management,
          API integration, and real-time search filtering.
        </p>
        <p className="text-2xl p-4">🔹 Key Features</p>
        <p className="text-xl p-2">
          <ul className="list-disc list-inside">
            <li>Fetches data from a public or custom API</li>
            <li>Real-time search filtering</li>
            <li>Loading and error handling states</li>
            <li>Case-insensitive search functionality</li>
            <li>Clean and modular component structure</li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default AboutP8;
