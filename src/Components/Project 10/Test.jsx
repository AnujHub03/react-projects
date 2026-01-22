import { useEffect, useLayoutEffect, useState } from 'react'

const Test = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [windowSize,setWindowSize] =useState((
    {width :0,
    height:0
  }
  ))

  function handleResize(){
    setWindowSize({
      width:window.innerWidth,
      height:window.innerHeight
    })
  }
  useLayoutEffect(()=>{
     handleResize()
        window.addEventListener('resize',handleResize);
        return()=>{
          window.removeEventListener('resize',handleResize);  
    }
    
  } ,[]);
      
     
  useEffect(() => {
    const fetchData = async () => {
    
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message || 'Something went wrong');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
  }, [url]);
   

 
  return { data, error, loading  , ...windowSize};
  

};

export default Test;