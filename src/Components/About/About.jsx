import React from "react";
import { Link } from "react-router";

const About = () => {
  const back = () => {
    window.history.back();
  };
  return (
    <>
      <div className=" min-h-screen bg-[url('../Img/about.jpg')] bg-cover bg-center border-transparent border-2">
        <div className="mt-12 w-9/12 border-2 border-transparent m-auto bg-gray-500 bg-opacity-70 p-12 h-90  rounded-3xl">
          <h1 className="text-red-500 text-4xl ">Disclaimer :</h1>
          <p className="text-md mt-4">
            {" "}
            In this Website all the projects are made with React JS and Tailwind
            CSS and Daisy UI to make it easly functional and more resposive and
            a bit of stylish. Here i have used easy logics and clean coding for
            better understanding.{" "}
          </p>

          <h1 className="text-center  text-7xl p-3 text-black underline">
            About my Projects
          </h1>
          <p className="text-2xl mt-4">
            Here we will find various react projects starting from basic and
            easy level.
          </p>
          <p className="text-2xl mt-4">From -</p>
          <p className="text-xl ml-20">
            {" "}
            Project 1 to 5 .{" "}
            <Link
              className="text-blue-200 text-lg hover:text-blue-800"
              to={"/AboutEasy"}
            >
              {" "}
              More...
            </Link>
          </p>

          <p className="text-2xl mt-4">
            Then there are some Medium level projects.{" "}
          </p>
          <p className="text-2xl mt-4">From -</p>
          <p className="text-xl ml-20">
            Project 6 to 11 .{" "}
            <Link className="text-blue-200 text-lg hover:text-blue-800">
              {" "}
              More...
            </Link>{" "}
          </p>
          <p className="text-2xl mt-4">
            Finally there are some Hard level projects.{" "}
          </p>
          <p className="text-2xl mt-4">From -</p>
          <p className="text-xl ml-20"> Project 12 - 13 . 
             <Link className="text-blue-200 text-lg hover:text-blue-800">
              {" "}
              More...
            </Link>{" "}
          </p>
          <p className="text-2xl mt-4">
            You can also find a form which send data to backend using Node JS .
          </p>
          <p className="text-2xl mt-4">
            And an another form which send data to PHP backend and Mysql as
            Database.
          </p>
          <div className="border-2 border-transparent p-5 rounded-xl m-auto mt-5 w-48 text-center">
            <button
              className="bg-gray-500 p-3 text-xl rounded-xl hover:bg-gray-700"
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

export default About;
