import React from 'react'
import { useDispatch } from 'react-redux';
import { removeItem } from '../../Storage/Slices/CartSlice';

const CartTile = ({item}) => {

  const dispatch = useDispatch()

  function handleRemoveFromCart() {
    console.log("clicked");
    
    dispatch(removeItem(item.id))
  }
  return (
   <div className="flex items-center p-5 justify-between border mb-4 rounded-xl shadow-lg">
      <div className="flex p-3">
        <img
          src={item.image}
          alt="Product"
          className="w-20 h-30 object-contain"
        />

        <div className="ml-10 self-start space-y-5">
          <h2 className="text-lg font-semibold text-gray-200">
            {item.title}
          </h2>

          <p className="text-gray-300">${item.price}</p>

          <button
            onClick={handleRemoveFromCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartTile