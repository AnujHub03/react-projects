import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Storage/Slices/CartSlice";

const ProductTile = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // fix here

  function addToCart() {
    dispatch(addItem(product));
  }

  function handelRemoveFromCart() {
    dispatch(removeItem(product));
  }
  return (
    <div>
      <div className="border p-4 m-2 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 transition-shadow hover:-translate-y-2 duration-300 h-full flex flex-col justify-between gap-4 ">
        <div className="flex flex-col h-full justify-center">
          <img
            src={product?.image}
            alt={product?.title}
            className="h-44 w-full object-contain mb-4"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <h2 className="text-lg font-semibold mb-2">{product?.title}</h2>
          <p className="text-gray-700 mb-4">${product?.price}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() =>
              cartItems.some((item) => item.id === product.id)
                ? handelRemoveFromCart()
                : addToCart()
            }
          >
            {cartItems.some((item) => item.id === product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
