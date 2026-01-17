import React, { useRef, useState } from 'react'
import Modal from './Modal';

const Project7 = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const handleModalToggle = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <div className="text-center min-h-screen bg-[url('../../public/Img/bass.jpg')] bg-cover bg-center"> 
        <div className="text-center text-5xl font-bold pt-10 border-2 border-transparent">
          <h1>Project 8 </h1>
        </div>
        
        <div className="text-center m-auto text-3xl mt-10 bg-slate-600 bg-opacity-40">
          <button 
            className='p-6 hover:bg-slate-700 transition-colors duration-300' 
            onClick={handleModalToggle}
          >
             Open Modal popup
          </button>
          
          {showModal && (
            <Modal 
              ref={modalRef}
              onClose={() => setShowModal(false)}
              body={<div>This is Model Body . This is just a sample text for modal body content just to show how it works.</div>}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Project7