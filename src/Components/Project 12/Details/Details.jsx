import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import { GlobalContext } from '../Context/Index';

const Details = () => {
 const {id}=useParams();
  // console.log(id);
  const {recipeDetails,setRecipeDetails,handelAddToFavorites,favoritesList}=useContext(GlobalContext);

  useEffect(()=>{
    async function getRecipesDetails(){
      const response= await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data= await response.json();
      console.log(data);
      if(data?.data){
        setRecipeDetails(data?.data);

        console.log(recipeDetails);
      }
      
    }
    getRecipesDetails();
  },[]);

  return (
    <>
    <div className='h-max min-h-screen w-full bg-gray-200 p-5'>
      <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 '>
        <div className='row-start lg:row-start-auto'>
          <div className='h-96 overflow-hidden rounded-xl group'>
            <img src={recipeDetails?.recipe?.image_url} alt={recipeDetails?.title} className='w-full h-full object-cover block group-hover:scale-105 transition-transform duration-300 transform'/>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-3xl font-bold text-black'>{recipeDetails?.recipe?.title}</h1>
          <h3 className=' text-black font-bold text-xl truncate'>Publisher : {recipeDetails?.recipe?.publisher}</h3>
          <p className=' text-black  '>Cook Time : {recipeDetails?.recipe?.cooking_time} minutes</p>
          <p className=' text-black  '>Servings : {recipeDetails?.recipe?.servings} persons</p>
          <div>
            <button onClick={()=>handelAddToFavorites(recipeDetails?.recipe)} className='bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-300'>
            {favoritesList.findIndex((item)=>item.id===recipeDetails?.recipe?.id)!==-1 ? 'Remove from Favorites' : 'Add to Favorites' }
            </button>
          </div>
          <h2 className='text-2xl font-bold text-black mt-5'>Ingredients :</h2>
          <div className='flex flex-col gap-2'>
            {
              recipeDetails?.recipe?.ingredients?.map((ing,index)=>(
                <p key={index} className=' text-black  '>- {ing.quantity ? ing.quantity : ''} {ing.unit} {ing.description}</p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Details