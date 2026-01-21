import React, { useRef } from 'react'

const Project10 = () => {
   
    const {width,height}=windowSize;
    const bottomRef=useRef(null);     
    function handleScrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function handelScrollToBottom() {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <div className=" min-h-screen bg-[url('../../../img/abstract.jpg')] bg-cover bg-center"> 
        <div className=" text-white p-3  rounded-b-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mt-10">Project 11 </h1>
        </div>
        <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold text-center mt-10">Scroll to Top and Bottom feature</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={handelScrollToBottom}>Scroll to Bottom</button>

        </div>
        <div className="mt-10">
            <h2 className="text-2xl font-semibold text-center mt-10">Window Size</h2>
            <p className="text-center text-xl mt-5 text-white"> Width : {width}px </p>
            <p className="text-center text-xl mt-2 text-white"> Height : {height}px </p>
        </div>
        <div className="mt-10">
            <h2 className="text-2xl font-semibold text-center">Use fetch Hook</h2>
            
            {
                loading ? (
                    <p className="text-center mt-5 text-xl">Loading... Please Wait !! </p>
                ) : null
            }
            { error ? (
                <p className="text-center mt-5 text-xl text-red-500"> Error: {error} </p>
            ) : null }
        <ul style={{listStyleType: 'none', padding: 0}}>
            { 
                data && data.products && data.products.length 
                ? data.products.map(item => (
                    <li key={item.id} className="text-white text-center mt-5 text-md">
                        { item.title}
                    </li>
                ))
                : null
            }
        </ul>
            
            <div ref={bottomRef} className="text-center mt-10 mb-10">
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={handleScrollToTop}>Scroll to Top</button>
            <h3> This is the bottom of page. In order to reach to top click the button above.</h3>
            </div>
        </div>
    </div>
  )
}

export default Project10