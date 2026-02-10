import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import CartTile from "./Cart-Tile/CartTile";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);

  const state = useSelector((state) => state.cart);

  useEffect(() => {
    const total = state.items.reduce((sum, item) => sum + item.price, 0);
    setTotalCart(total);
  }, [state.items]);
  console.log(totalCart);
  return (
    <>
      <div>
        {state && state.items.length > 0 ? (
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto ">
            <div className="flex flex-col justify-center items-center p-3">
              {state.items.map((item) => (
                <CartTile key={item.id} item={item} />
              ))}
            </div>
            <div className="flex flex-col justify-center items-center p-3">
              <h2 className="text-xl font-semibold mb-2">
                Total item: {state.items.length}
              </h2>
              <h1 className="text-2xl font-bold mb-4">
                Total: ${totalCart.toFixed(2)}
              </h1>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-gray-400">
              Your Cart is Empty
            </h1>
            <Link
              to="/Navigationbar"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                {" "}
                Continue Shopping{" "}
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
