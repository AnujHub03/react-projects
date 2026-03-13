import React from "react";

const AboutHard = () => {
    const back = () => {
    window.history.back();
  };
  return (
    <>
      <div className=" min-h-screen bg-[url('../Img/desert.jpg')] bg-cover bg-center border-transparent border-2 ">
        <div className="m-auto h-auto text-white bg-gray-500 bg-opacity-10  w-10/12 p-5 rounded-2xl mt-12">
          <div className="mt-5"></div>
          <div className="mt-5"></div>
          <div className="">
            <button
              className="bg-gray-500 p-3 text-xl rounded-xl hover:bg-gray-700 hover:text-white mt-10 ml-4"
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

export default AboutHard;
