import React, { useState } from "react";
import { Link } from "react-router";

const Project5 = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleChange(index) {
    setCurrentTabIndex(index);
    onChange && onChange(index);
  }

  return (
    <div className="text-center min-h-screen bg-[url('../../public/Img/flower.jpg')] bg-cover bg-center">
      <div className="text-center text-5xl font-bold pt-10">
        <h1>Project 5</h1>
      </div>

      <div className="text-center border-2 border-black m-10 p-10 bg-slate-700 bg-opacity-20">
        <div className="flex justify-center gap-10 mb-10 cursor-pointer ">
          {tabsContent.map((tabItem, index) => (
            <div key={tabItem.label}>
              <div
                className={`flex text-xl bg-slate-300 p-4  text-black rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300 ${
                  currentTabIndex === index ? "bg-blue-600 text-white" : ""
                }`}
                onClick={() => handleChange(index)}
              >
                {tabItem.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-black text-2xl bg-slate-300 p-4 font-bold bg-opacity-70">
          {tabsContent[currentTabIndex]?.content}
        </div>
      </div>
      <div className="text-center p-5 bg-gray-600 mt-52 w-9/12 m-auto rounded-3xl bg-opacity-70 border-2 border-transparent">
        <p className="text-white">
          {" "}
          If you wana more about project then click here :{" "}
          <Link
            className="text-blue-200 text-lg hover:text-blue-800"
            to={"/aboutp5"}
          >
            {" "}
            More...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Project5;
