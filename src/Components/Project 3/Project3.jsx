import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import "./style.css"

const Project3 = ({noOfStar}) => {
  // console.log("Star", noOfstar);
  
  const [rating,setRating]=useState(0);
  const [hover,setHover]=useState(0);

  const handelClick=(getCurrentIndex)=>{
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
    
  }
  const handelMouseEnter=(getCurrentIndex)=>{
    setHover(getCurrentIndex);
  }
  const handelMouseLeave=()=>{
     setHover(rating);
  }

  return (
    <div className="  text-center min-h-screen bg-[url('../../public/img/hotel.jpg')] bg-cover bg-center"> 
      <div className="text-center text-5xl font-bold pt-4 text-white border-2 border-transparent">
            <h1> Project 3  </h1>
          </div>
       <div className="flex text-center w-40 mt-10 m-auto p-4">
      {
      [...Array(noOfStar)].map((_,index)=>{
        index+=1;
        return  <FaStar 
        key={index}
        onClick={()=>handelClick(index)} 
        onMouseMove={()=>handelMouseEnter(index)}
        onMouseLeave={()=>handelMouseLeave()} 
        className  ={index <=(hover || rating) ? 'actives':"inactive"}  />    
        
      })
    }
        </div>
        
    </div>
  )
}

export default Project3