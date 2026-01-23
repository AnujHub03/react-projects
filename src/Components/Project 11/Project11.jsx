import React, { useRef, useState } from 'react'


const Project11 = () => {
      const ref=useRef();
      const [showContent,setShowContent]=useState(false);
     

  return (
    <div className=" min-h-screen bg-[url('../../../img/ash.jpg')] bg-cover bg-center p-10">
       <div className="text-center text-5xl font-bold pt-10 border-2 border-transparent">
                <h1>Project 11</h1>
       </div>
        {showContent ?
            <div ref={ref} className='bg-white bg-opacity-50 text-black p-10 rounded-lg shadow-lg max-w-2xl m-auto mt-20'>
        <h1 className='text-4xl text-center  font-bold p-3'>This is random content .</h1>
        <p className='text-xl mb-5 text-bold'>
            Please click anywhere but outside of the content in order to close this modal. It won't close if you click inside it.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At totam in perferendis eveniet repellendus? Hic saepe harum repellendus necessitatibus reprehenderit.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At totam in perferendis eveniet repellendus? Hic saepe harum repellendus necessitatibus reprehenderit.
        </p>
        </div>: <div className='flex justify-center items-center h-auto mt-20'> <button className='bg-gray-500 p-3 text-xl rounded-xl hover:bg-gray-700' onClick={()=>setShowContent(true)}>Show Text</button> </div>}
         </div>
     
          
  )
}

export default Project11