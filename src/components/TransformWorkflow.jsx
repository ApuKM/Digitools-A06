import React from "react";

const TransformWorkflow = () => {
  return (
    <div className="mt-14 md:mt-20 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20">
      <div className="space-y-6">
        <h1 className="text-white text-[28px] md:text-4xl font-extrabold text-center">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-white/90 leading-6 text-center">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br />
          Start your free trial today.
        </p>
        <div className="flex items-center justify-center gap-2 ">
          <button className="btn text-base rounded-full">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
              Explore Products
            </span>
          </button>
          <button className="btn btn-outline border border-white text-white text-base rounded-full hover:text-purple-500">
            View Pricing
          </button>
        </div>
        <div className="text-white/80 text-center">
          <span>14 days free trial</span> | <span>No credit card required</span>{" "}
          | <span>Cancel anytime</span>
        </div>
      </div>
    </div>
  );
};

export default TransformWorkflow;
