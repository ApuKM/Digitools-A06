import React, { use } from "react";
import ToolCard from "./ToolCard";

const ToolsContainer = ({ dataPromise }) => {
  const allData = use(dataPromise);
  return (
    <div className="mt-14 md:mt-20 w-[90%] max-w-7xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-[#101727] text-[40px] font-extrabold text-center">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382] leading-5 text-center">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
        <div className=" flex items-center justify-center gap-2">
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-sm text-white rounded-full font-semibold">Products</button>
          <button className="btn rounded-full">Cart(0)</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {allData.map((data) => (
          <ToolCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default ToolsContainer;
