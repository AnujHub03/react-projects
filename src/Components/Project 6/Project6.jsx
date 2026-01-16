import React, { useEffect, useState } from 'react';

const Project6 = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false); // Changed to boolean
    const [error,setError]=useState(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    // Function to handle scroll event and calculate scroll percentage
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        const totalScrollableHeight = scrollHeight - clientHeight;
        const scrollPercent = totalScrollableHeight > 0 ? (scrollTop / totalScrollableHeight) * 100 : 0;
        setScrollPercentage(scrollPercent);
    }

    async function fetchData(){
        try{
            setLoading(true);
            setError(null);
            const res=await fetch("https://dummyjson.com/products");
            const output=await res.json();
             
            if(output && output.products && output.products.length>0){
                setData(output.products);
                setLoading(false);
            }
        }catch(err){
            console.log(err);
            setLoading(false);
            setError("Something Went Wrong");
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    useEffect(()=>{
        fetchData();
    },[])

    if(loading){
        return <h1 className='text-3xl font-bold text-center mt-5'>Loading...</h1>
    }
    if(error){
        return <h1 className='text-3xl font-bold text-center mt-5'>{error}</h1>
    }

  return (
    <>
 
    <div className='text-3xl font-bold text-center bg-gray-400 h-40 items-center justify-center  left-0 w-full mt-10 '>
        <h1 className="m-5" >Project 6</h1>
        <h1 className='m-3'>Scroll Indicator</h1>
        <h1 className="m-5" >The progress bar will change as you scroll</h1>
    </div>
    
   
    <div className="mt-10 w-full h-8 bg-orange-600 sticky top-0 left-0 z-40">
        <div 
            className="h-8 bg-green-700 transition-all duration-100 ease-out" 
            style={{width:`${scrollPercentage}%`}}
        ></div>
    </div>
    
    
    <div className='pt-32'> 
        <div className='text-center text-xl m-2 font-normal '>
            {data && data.length > 0 ?
            data.map((item)=>{
                return( 
                    <div key={item.id} className='mb-8 p-4 border border-gray-300 rounded-lg'>
                        <h1 className='m-3 text-2xl font-bold'>{item.title}</h1>
                        <p className='text-gray-600'>{item.description}</p>
                        <p className='text-green-600 font-semibold'>Price: $ {item.price}</p>
                        <img 
                            src={item.thumbnail} 
                            alt={item.title} 
                            className='w-48 h-48 object-cover mx-auto mt-4'
                        />
                    </div>
                )
            })
            :"No Data Found"}
        </div>
    </div>
    </>
  )
}

export default Project6