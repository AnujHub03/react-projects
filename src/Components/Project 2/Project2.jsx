import React, { useEffect, useState } from 'react'

const Project2 = () => {

  const [type,setType]=useState('hex');
  const [color,setColor]=useState('black');

   const handleHexArray=(length)=>{
    return Math.floor(Math.random()*length)
  }

  const handleCreateHexColor=()=>{
    const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexcolor="#";
    for(let i=0;i<6;i++ ){
      hexcolor+=hex[handleHexArray(hex.length)]
    } 
    // console.log(hexcolor);
    setColor(hexcolor)
  }
  const handleCreateRgbColor=()=>{
    const r=handleHexArray(256);
    const g=handleHexArray(256);
    const b=handleHexArray(256);
    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(()=>{
    if(type==='rgb') handleCreateRgbColor();
    else handleCreateHexColor()
  },[type])

  return (
    <>
    <div style={{background:color}}  className='h-screen '>
          <div className="text-center text-5xl font-bold pt-10 text-white">
            <h1 >Project 2 </h1>
          </div>
          <div className=" h-10 w-auto text-xl p-2 text-center m-auto  mt-8">
            <h1>  Here we will change background color radomly on click of a button </h1>
          </div>
          <div className=" h-14 w-auto text-xl  text-center m-auto ">
          <button onClick={type=== 'hex' ? handleCreateHexColor :handleCreateRgbColor } className=" btn bg-black hover:bg-primary m-2 w-72"> Generate random Color</button>
          <button onClick={()=>setType('hex')} className="bg-black btn hover:bg-primary m-2 w-40"> Hex color</button>
          <button onClick={()=>setType('rgb')} className="bg-black btn hover:bg-primary m-2 w-40">Rgb color</button>
          </div>
          <div className=" flex justify-center text-white text-6xl mt-20">
            <h3>{type==='rgb' ?'RGB color :' :'HEX color :'}</h3>
            <h1>{color}</h1>
          </div>
      </div>
      <div className="text-center text-sm p-3 bg-black text-white">
            <h1> © 2025  All Rights Reserved by Anuj</h1>
      </div>
    </>
  )
}

export default Project2