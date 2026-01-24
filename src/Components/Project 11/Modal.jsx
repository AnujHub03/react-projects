import React, { useEffect } from 'react'

const Modal = ({ref,handler}) => {
  useEffect(() => {
          function listerner(event){
              if(!ref.current || ref.current.contains(event.target)){
                  return
              }
              if(handler){
                  handler();
              }
          }
              document.addEventListener('mousedown',listerner);
              document.addEventListener('touchstart',listerner);
              return ()=>{
                  document.removeEventListener('mousedown',listerner);
                  document.removeEventListener('touchstart',listerner);
              }
      },[ref,handler]);
  return (
    <>
    
    </>
  )
}

export default Modal