import React from "react";
import AboutP1 from "./AboutP1";

const AboutEasy = () => {
  const back = () => {
    window.history.back();
  };
  return (
    <>
      <div className=" min-h-screen bg-[url('../Img/about1-5.jpg')] bg-cover bg-center border-transparent border-2 ">
        <div className="m-auto h-auto bg-gray-500 bg-opacity-10  w-10/12 p-5 rounded-2xl mt-12"></div>
        <div className="flex justify-center mt-10">
          <div className="mt-5">
            <AboutP1 />
          </div>
          <button
            className="bg-gray-500 p-3 text-xl rounded-xl hover:bg-gray-700 hover:text-white"
            onClick={back}
          >
            {"<<"} Back
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutEasy;
