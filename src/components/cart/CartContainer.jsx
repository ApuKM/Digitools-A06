import React from "react";
import TabSection from "../TabSection";
import CartItem from "./CartItem";

const CartContainer = ({ cartItems, setCartItems, tab, setTab }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="mt-14 md:mt-20 w-[90%] max-w-7xl mx-auto ">
      <div className="flex flex-col gap-10">
        <TabSection tab={tab} setTab={setTab} cartItems={cartItems} />
        <div className="space-y-5">
          <h1 className="text-2xl text-[#101727] font-bold">Your Cart</h1>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItems={cartItems} cartItem={cartItem} setCartItems={setCartItems}/>
          ))}
          <div className="flex items-center justify-between mt-10">
            <h4 className="text-base text-[#627382] font-medium">Total</h4>
            <span className="text-lg font-bold text-[#101727]">${total}</span>
          </div>
          <button className="btn font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA]  w-full text-white rounded-full">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
