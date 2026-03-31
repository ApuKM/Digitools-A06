import React from "react";

const ToolCard = ({ data }) => {
  const { name, description, price, period, tag, tagType, features, icon } =
    data;
  return (
    <div className="hover:-translate-y-1  transition-all duration-200">
      <div className="card bg-base-100 shadow-lg rounded-md">
        <div className="card-body space-y-4">
          <span
            className={`badge badge-xs ${tagType === "new" ? "bg-blue-200 text-blue-500" : tagType === "popular" ? "bg-orange-200 text-orange-500" : "bg-purple-200 text-purple-500"} absolute top-0 right-0 p-2 `}
          >
            {tag}
          </span>
          <img src={icon} alt="" className="w-6 h-6" />
          <div className="flex flex-col space-y-3">
            <h2 className="text-xl font-bold text-[#101727]">{name}</h2>
            <p className="text-sm leading-5 text-[#627382]">{description}</p>
            <span className="text-[#627382]">
              <span className="text-[#101727] text-lg font-semibold">
                ${price}
              </span>
              /{period}
            </span>
          </div>
          <div id="features" className="flex-1">
            <ul className="flex flex-col gap-2 text-xs">
              {features.map((feature, key) => (
                <li key={key}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#627382] text-xs">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-sm text-white rounded-full font-semibold w-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
