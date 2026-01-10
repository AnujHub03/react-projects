import React from 'react'


const HomePage = () => {
    
  return (
    <div  className="hero min-h-screen bg-[url('../Img/officee.jpg')] bg-cover bg-center">
        <div className=' bg-gray-500 bg-opacity-70 p-12 h-90 text-center rounded-3xl'>
            <h1 className='  text-6xl p-3'>Welcome to My Website</h1>
            <p className="">Here we will find various react projects from easy to all the way to Hard one.</p>
            <button className="btn btn-wide rounded-xl bg-white text-black  mt-10 hover:bg-black hover:text-white">About Projects</button>        </div>
    </div>
  )
}

export default HomePage