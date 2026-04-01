import React from "react";
import TabSection from "../TabSection";
import CartItem from "./CartItem";

const CartContainer = ({ cartItems, setCartItems, tab, setTab }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="mt-14 md:mt-20 w-[90%] max-w-7xl mx-auto ">
      <div className="flex flex-col gap-10">
        <TabSection tab={tab} setTab={setTab} cartItems={cartItems} />
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-10 px-4 bg-base-300">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-100 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 max-w-md">
              Looks like you haven’t added anything yet. Start exploring and add
              your favorite items to your cart.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <h1 className="text-2xl text-[#101727] font-bold">Your Cart</h1>
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                cartItems={cartItems}
                cartItem={cartItem}
                setCartItems={setCartItems}
              />
            ))}
            <div className="flex items-center justify-between mt-10">
              <h4 className="text-base text-[#627382] font-medium">Total</h4>
              <span className="text-lg font-bold text-[#101727]">${total}</span>
            </div>
            <button
              className="btn font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA]  w-full text-white rounded-full"
              onClick={() => setCartItems([])}
            >
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
