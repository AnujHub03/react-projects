import React from "react";
import uselocalStorage from "./CustomHook";
import "./Custom.css";
import { Link } from "react-router";

const Project4 = () => {
  const [theme, setTheme] = uselocalStorage("themes", "dark");
  const handelClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <>
      <div
        className="text-center text-5xl font-bold pt-10 text-black border-2 border-transparent"
        data-theme={theme}
      >
        <h1> Project 4 </h1>
      </div>
      <div
        className="min-h-screen items-center border-2 border-transparent"
        data-theme={theme}
      >
        <div className="h-Uto w-auto m-auto  items-center text-center p-7 font-semibold rounded-xl mt-32">
          <h1 className="text-5xl mb-10"> Current Theme is {theme} </h1>
          <button className="h-16 w-36  rounded-3xl" onClick={handelClick}>
            {" "}
            Change Theme
          </button>
        </div>
        <div className="text-center p-5 bg-gray-600 mt-12 w-9/12 m-auto rounded-3xl bg-opacity-70 border-2 border-transparent">
          <p className="text-white">
            {" "}
            If you wana more about project then click here :{" "}
            <Link
              className="text-blue-200 text-lg hover:text-blue-800"
              to={"/aboutP4"}
            >
              {" "}
              More...
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Project4;
