import React from "react";

const pricingPlans = [
  {
    id: 1,
    title: "Starter",
    shortPara:
      "Perfect for beginners getting started.\nAccess essential tools with basic features.",
    price: 0,
    status: "free",
    features: [
      "Basic AI tools access",
      "Limited usage per day",
      "Community support",
      "Standard templates",
      "Single user access",
    ],
  },
  {
    id: 2,
    title: "Pro",
    shortPara:
      "Best for developers and freelancers.\nUnlock powerful tools for productivity.",
    price: 12,
    status: "popular",
    features: [
      "All Starter features",
      "Unlimited AI usage",
      "Priority support",
      "Advanced templates",
      "Multi-device access",
      "Faster processing",
    ],
  },
  {
    id: 3,
    title: "Business",
    shortPara:
      "Ideal for growing teams and startups.\nBoost collaboration and performance.",
    price: 29,
    status: "favourite",
    features: [
      "All Pro features",
      "Team collaboration tools",
      "Admin dashboard",
      "Usage analytics",
      "Custom integrations",
      "Priority processing",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="mt-14 md:mt-20">
      <div className="w-[90%] max-w-7xl mx-auto ">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-[#101727] text-[40px] font-extrabold ">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#627382] leading-5 ">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {pricingPlans.map((pricingPlan) => (
            <div
              className={`card ${pricingPlan.status === "popular" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] " : "bg-base-200"}  shadow-sm hover:shadow-lg transition-all`}
              key={pricingPlan.id}
            >
              <div className="card-body">
                {pricingPlan.status === "popular" && (
                  <span className="badge badge-xs bg-[#FEF3C6] p-2.5 rounded-full text-orange-500 absolute -top-2 left-[50%] -translate-x-[50%] z-10">
                    Most Popular
                  </span>
                )}
                <div className="flex flex-col gap-3">
                  <h2
                    className={`text-2xl font-bold ${pricingPlan.status === "popular" ? "text-white" : "text-[#101727]"}`}
                  >
                    {pricingPlan.title}
                  </h2>
                  <h2
                    className={`text-base ${pricingPlan.status === "popular" ? "text-white/80" : "text-[#627382]"}`}
                  >
                    {pricingPlan.shortPara}
                  </h2>
                  <span
                    className={`text-xl ${pricingPlan.status === "popular" ? "text-white" : "text-[#627382]"}`}
                  >
                    <span
                      className={`${pricingPlan.status === "popular" ? "text-white" : "text-[#101727]"} font-bold text-4xl`}
                    >
                      ${pricingPlan.price}
                    </span>
                    /Month
                  </span>
                </div>
                <ul className="mt-5 flex flex-col gap-2 text-xs flex-1">
                  {pricingPlan.features.map((feature, index) => (
                    <li key={index}>
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
                      <span
                        className={`font-medium text-sm ${pricingPlan.status === "popular" ? "text-white" : "text-[#627382]"} `}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  {pricingPlan.status === "free" && (
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-sm text-white rounded-full font-semibold w-full">
                      Get Started Free
                    </button>
                  )}
                  {pricingPlan.status === "popular" && (
                    <div className="bg-white rounded-full ">
                      <button className="btn text-sm bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-none font-semibold w-full shadow-none">
                        Start Pro Trial
                      </button>
                    </div>
                  )}

                  {pricingPlan.status === "favourite" && (
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-sm text-white rounded-full font-semibold w-full">
                      Contact Sales
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
