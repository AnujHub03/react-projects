import React, { useEffect, useState } from 'react'

const CustomHook = (key,defaultValue) => {
    const [value,setValue]=useState(()=>{
        let Currentvalue;
        try{
            Currentvalue=JSON.parse(localStorage.getItem(key)) || defaultValue;
        }   
        catch(e){
            Currentvalue=defaultValue;
        }   
        return Currentvalue;
    });
useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);
  return (
    [value,setValue]
  )
}

export default CustomHook