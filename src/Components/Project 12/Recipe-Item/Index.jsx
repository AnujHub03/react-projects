import React from 'react'
import { Link } from 'react-router'

const RecipeItem = (item) => {
  return (
    <div className='flex flex-col w-72 gap-4 p-5 overflow-hidden bg-white/55 rounded-2xl shadow-xl hover:shadow-gray hover:shadow-2xl hover:translate-y-[-5px] transition-shadow duration-300 m-auto mb-10 '>
      <div className='h-40 flex justify-center overflow-hidden rounded-xl items-center'>
        <img src={item.item.image_url} alt={item.item.title} className='w-full block' />
      </div>
      <h2 className='text-xl font-bold text-black '>{item.item.title}</h2>
      <p className='text-gray-800'>Publisher: {item.item.publisher}</p> 
      <Link to={`/Navigation/details/${item.item.id}`} className='mt-auto bg-orange-700 text-white text-center py-2 rounded-lg hover:bg-orange-800 transition-colors duration-300'>
      View Recipe</Link>
    </div>
  )
}

export default RecipeItem