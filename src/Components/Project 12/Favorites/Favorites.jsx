import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Index';
import RecipeItem from '../Recipe-Item/Index';

const Favorites = () => {
  const{favoritesList}=useContext(GlobalContext);

  return (
    <>
        <div className=' py-8 container mx-auto flex flex-wrap justify-center gap-10 '>
            {
                favoritesList && favoritesList.length > 0 
                ? favoritesList.map((item)=>(<RecipeItem item={item} />))
                :<div className=''>
                   <p className='lg:text-4xl text-xl text-center  font-extrabold' >No recipe is added to favorites.</p> 
                    </div>
            }
        </div>
       </>
  )
}

export default Favorites