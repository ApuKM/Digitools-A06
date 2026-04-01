import React from "react";

const getStartedData = [
  {
    id: 1,
    icon: "/user.png",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: 2,
    icon: "/products/package.png",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    id: 3,
    icon: "/rocket.png",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

const GetStarted = () => {
  return (
    <div className="bg-[#F9FAFC] mt-14 md:mt-20">
      <div className="w-[90%] max-w-7xl mx-auto py-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-[#101727] text-3xl md:text-[40px] font-extrabold ">
            Get Started in 3 Steps
          </h2>
          <p className="text-[#627382] leading-5 ">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {getStartedData.map((data) => (
            <div className="card bg-base-100 shadow-sm py-8 hover:shadow-lg transition-all" key={data.id}>
              <span className="bg-[#F9FAFC] w-fit p-3 rounded-full mx-auto">
                <img src={data.icon} alt="" className="w-10 h-10" />
              </span>
              <div className="card-body ">
                <h2 className="card-title justify-center text-[#101727]">
                  {data.title}
                </h2>
                <p className="text-center text-[#627382]">{data.description}</p>
              </div>
              <div className="absolute top-1 right-1 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-sm rounded-full flex items-center justify-center w-8 h-8
              ">
                <span className="text-white font-semibold">
                  0{data.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
