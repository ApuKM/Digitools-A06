import React from "react";
import playIcon from "../assets/Play.png";
import banner from "../assets/banner.png"

const Banner = () => {
  return (
    <div className="w-[90%] max-w-7xl mx-auto mt-14 md:mt-20">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-8 w-full ">
          <img
            src={banner}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className="bg-base-300 inline-flex items-center py-1 px-2 rounded-full">
              <div className="w-4 h-4 rounded-full bg-purple-400 flex items-center justify-center shadow-lg shadow-purple-400/50">
                <div className="w-2 h-2 rounded-full bg-purple-800"></div>
              </div>
              <span className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-base font-medium ">
                New: AI-Powered Tools Available
              </span>
            </div>
            <h1 className="text-5xl font-extrabold leading-18 text-[#101727]/90 my-4">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="my-8 text-[#627382] leading-5 text-lg max-w-xl">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex items-center gap-4">
              <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-base text-white rounded-full font-bold">
                Explore Products
              </button>
              <button className="btn btn-outline font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border border-violet-500 rounded-full">
                <img src={playIcon} alt="" className="w-4" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
