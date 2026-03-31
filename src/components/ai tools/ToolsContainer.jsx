import React, { use } from "react";
import ToolCard from "./ToolCard";
import TabSection from "../TabSection";

const ToolsContainer = ({
  dataPromise,
  cartItems,
  setCartItems,
  tab,
  setTab,
}) => {
  const allData = use(dataPromise);
  return (
    <div className="mt-14 md:mt-20 w-[90%] max-w-7xl mx-auto">
      <TabSection tab={tab} setTab={setTab} cartItems={cartItems} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {allData.map((data) => (
          <ToolCard
            data={data}
            key={data.id}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsContainer;
