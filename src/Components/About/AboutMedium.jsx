import React from "react";
import AboutP6 from "./AboutP6";
import AboutP7 from "./AboutP7";
import AboutP8 from "./AboutP8";

const AboutMedium = () => {
  const back = () => {
    window.history.back();
  };
  return (
    <>
      <div className=" min-h-screen bg-[url('../Img/wire.jpg')] bg-cover bg-center border-transparent border-2 ">
        <div className="m-auto h-auto text-white bg-gray-500 bg-opacity-10  w-10/12 p-5 rounded-2xl mt-12">
          <div className="mt-5">
          <AboutP6/>
          </div>
          <div className="mt-5">
          <AboutP7/>
          </div>
          <div className="mt-5">
          <AboutP8/>
          </div>
          <div className="flex justify-center mt-10">
          <button
            className="bg-gray-500 p-3 text-xl rounded-xl hover:bg-gray-700 hover:text-white"
            onClick={back}
          >
            {"<<"} Back
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default AboutMedium;
