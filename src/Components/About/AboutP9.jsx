import React from "react";

const AboutP9 = () => {
  return (
    <>
      <div className="border-2 border-transparent p-5 rounded-xl bg-gray-500 bg-opacity-20 mt-10 w-9/12 m-auto">
        <h1 className="text-6xl p-3 "> Project 9</h1>
        <p className="text-2xl p-3 mt-4">
          📌 Project Description - Tic Tac Toe Game
        </p>
        <p className="text-xl p-2">
          The Tic Tac Toe Game is a simple and interactive web application built
          using React.js. It allows two players to play the classic Tic Tac Toe
          game on a 3×3 grid. The project demonstrates the use of React
          components, state management, event handling, and conditional
          rendering to create a dynamic user interface.
        </p>
        <p className="text-2xl p-4">🔹 Key Features</p>
        <p className="text-xl p-2">
          <ul className="list-disc list-inside">
            <li>Interactive 3×3 game board</li>
            <li>Two-player gameplay (X and O)</li>
            <li>Automatic winner detection</li>
            <li>Draw detection</li>
            <li>Game reset/restart option</li>
            <li>Responsive UI built with React</li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default AboutP9;
