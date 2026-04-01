import React from "react";

const Statistics = () => {
  return (
    <div className="mt-14 md:mt-20 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12">
      
      <div className="stats stats-vertical md:stats-horizontal shadow items-center gap-0 md:gap-30">      
        <div className="stat gap-2">
          <div className="stat-value text-4xl md:text-5xl text-white">50K+</div>
          <div className="stat-desc font-medium text-xl text-white">
            Active Users
          </div>
        </div>
        <div className="stat gap-2">
          <div className="stat-value text-4xl md:text-5xl text-white">200+</div>
          <div className="stat-desc font-medium text-xl text-white">
            Premium Tools
          </div>
        </div>
        <div className="stat gap-2">
          <div className="stat-value text-4xl md:text-5xl text-white">4.9</div>
          <div className="stat-desc font-medium text-xl text-white">
            Rating
          </div>
        </div>

      </div>
    </div>
  );
};

export default Statistics;