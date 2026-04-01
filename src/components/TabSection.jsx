import React from "react";

const TabSection = ({tab, setTab, cartItems}) => {
  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-[#101727] text-3xl md:text-[40px] font-extrabold text-center">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382] leading-5 text-center">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
        <div className=" flex items-center justify-center gap-2 pt-4">
          <button
            className={`btn ${tab === "models" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white" : ""}  rounded-full font-semibold text-sm`}
            onClick={() => setTab("models")}
          >
            Products
          </button>
          <button
            className={`btn ${tab === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white" : ""}  rounded-full font-semibold text-sm`}
            onClick={() => setTab("cart")}
          >
            Cart({cartItems.length})
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
