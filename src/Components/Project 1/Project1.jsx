import React, { useState } from "react";
import { users } from "./Data";
import { Link } from "react-router";

const Project1 = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelected, setEnableMultiSelected] = useState(false);
  const [Multi, setMulti] = useState([]);

  const handleSingle = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  const handlemulti = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    let cpyMulti = [...Multi];
    const findidexofmulti = cpyMulti.indexOf(getCurrentId);
    console.log(findidexofmulti);
    if (findidexofmulti === -1) {
      cpyMulti.push(getCurrentId);
    } else {
      cpyMulti.splice(findidexofmulti, 1);
    }
    setMulti(cpyMulti);
  };
  console.log(selected, Multi);

  return (
    <>
      <div className="text-center items-center min-h-screen bg-[url('../../public/img/project1.jpg')] bg-cover bg-center">
        <div className="text-center text-5xl font-bold pt-10 text-black border-2 border-transparent">
          <h1> Project 1 </h1>
        </div>
        <div className=" w-96 m-auto  mt-8 p-1 bg-slate-700 rounded-3xl">
          <p className="text-xl"> Default is Single Selection</p>
          <button
            onClick={() => setEnableMultiSelected(!enableMultiSelected)}
            className="bg-white text-black hover:bg-black hover:text-white p-3 m-4 rounded-xl cursor-pointer 2"
          >
            {" "}
            Enable Multi Selection{" "}
          </button>
          {users && users.length > 0 ? (
            users.map((data) => (
              <div className=" w-56 h-auto  m-auto  mb-6 rounded-xl">
                <div
                  onClick={
                    enableMultiSelected
                      ? () => handlemulti(data.id)
                      : () => handleSingle(data.id)
                  }
                  className="  cursor-pointer flex  items-center w-56 bg-orange-500 rounded-md "
                >
                  <h3 className="p-2 w-48"> Get data of ID : {data.id}</h3>
                  <span className="text-center"> + </span>
                </div>
                {
                  // selected=== data.id || Multi.indexOf(data.id)!==-1 ? (

                  enableMultiSelected
                    ? Multi.indexOf(data.id) !== -1 && (
                        <div className="  bg-slate-50 text-black rounded-xl ">
                          <h1>{data.name} </h1>
                          <h1>{data.email} </h1>
                          <h1>{data.role} </h1>
                        </div>
                      )
                    : selected === data.id && (
                        <div className="  bg-slate-50 text-black rounded-xl ">
                          <h1>{data.name} </h1>
                          <h1>{data.email} </h1>
                          <h1>{data.role} </h1>
                        </div>
                      )
                }
              </div>
            ))
          ) : (
            <div> 404 Error No Data Found </div>
          )}
        </div>
        <div className="text-center p-5 bg-gray-600 mt-10 w-9/12 m-auto rounded-3xl bg-opacity-70 border-2 border-transparent">
          <p>
            
            If you wana more about project then click here :
            <Link
              className="text-blue-200 text-lg hover:text-blue-800"
              to={"/aboutp1"}
            >
              More ...
            </Link>
          </p>
        </div>
      </div>

      <div className="text-center text-sm p-3 bg-black text-white">
        <h1>heading3:"© 2025 All Rights Reserved by Anuj"</h1>
      </div>
    </>
  );
};

export default Project1;
