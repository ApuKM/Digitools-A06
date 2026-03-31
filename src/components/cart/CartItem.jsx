import React from "react";

const CartItem = ({ cartItem, setCartItems, cartItems }) => {
  const handleFilteredCards = (cartItem) => {
    const filtered = cartItems.filter((item) => item.id !== cartItem.id);
    setCartItems(filtered);
  };
  return (
    <div>
      <div className="flex items-center justify-between border border-info/10 rounded-lg p-4 shadow-lg">
        <div className="flex gap-8 items-center">
          <img
            src={cartItem.icon}
            alt=""
            className="w-8 h-8 object-contain object-center rounded-md"
          />
          <div>
            <h3 className="text-lg font-semibold text-[#101727]">
              {cartItem.name}
            </h3>
            <p className="text-base text-[#627382] font-medium">
              ${cartItem.price}
            </p>
          </div>
        </div>
        <button
          onClick={() => handleFilteredCards(cartItem)}
          className="btn btn-ghost text-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
