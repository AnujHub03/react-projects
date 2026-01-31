import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Index'
import RecipeItem from '../Recipe-Item/Index';

const Project12 = () => {
  const {loading,recipeList}=useContext(GlobalContext);
  if(loading){
    return <div className='flex justify-center items-center h-screen bg-gray-200 text-4xl font-bold text-black'>      
             Loading... Please Wait !!!
          </div>
   }
  return (
    <>
    <div className='h-max min-h-screen w-full bg-gray-200'>
      <div className=" text-4xl font-bold text-black text-center shadow-xl p-10"> <h1>Project12</h1> </div>
      <div className="h-full text-center text-black text-xl p-10 "><p>Here you can search some recipes for your favorite dishes.  </p>
      </div>
      <div className='flex flex-wrap justify-center gap-10 p-10 '>
       {
                recipeList && recipeList.length > 0 
                ? recipeList.map((item)=>(<RecipeItem item={item} />))
                :<div className=''>
                   <p className='p-10 lg:text-4xl text-xl text-center  text-black font-extrabold' >Please search something as data is not preloaded.</p> 
                    </div>
            }
      </div>
    </div> 
    </>
  )
}

export default Project12 