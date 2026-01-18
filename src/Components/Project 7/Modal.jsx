import React, { useEffect } from 'react'

const Modal = ({id,header,body,footer ,ref ,handler}) => {
    
  return (
   <>
    
   <div className=' overflow-auto bg-slate-600 h-80 text-xl bg-opacity-10' id={id || "Modal"}>
    <div className='content'>
        <div className='header p-4 border-b-2 border-black text-center font-bold text-4xl'>
            {/* <span className=''> &times;</span> */}
            <h2>{header ? header: "Header"}</h2>
        </div>
        <div className='body p-4 text-2xl '>
            {body ? body : <div> <p> Body from data file </p></div>}
        </div>
        <div className='p-4'>
           {footer ? footer :<h2 className='text-center text-xl' >Footers</h2>}
       
    </div>
   </div>
   </div>
   </>
  )
}

export default Modal