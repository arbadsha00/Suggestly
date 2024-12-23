import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      description: "Access to basic features",
      features: ["10 query per month", "Basic product recommendations"],
      cta: "Get Started",
    },
    {
      name: "Premium",
      price: "$9.99/month",
      description: "For the ultimate experience",
      features: [
        "Expert opinions & analysis",
        "Exclusive product deals",
        "Priority customer support",
        "All Basic plan features",
      ],
      cta: "Try Now",
    },
    {
      name: "Basic",
      price: "$4.99/month",
      description: "Unlimited queries and more",
      features: [
        "Unlimited recommendations",
    
        "Comment, add recommendations",
      ],
      cta: "Get Started",
    },
  ];
  return (
    <div className="mt-16 mb-10 max-w-5xl mx-auto">
      <h1 className="text-center text-primary text-4xl font-bold">
        Choose Your Plan
      </h1>
      <p className="md:w-3/4 mx-auto text-center my-2">
        Choose the plan that best fits your needs. Upgrade anytime!
      </p>
      <div className="grid md:grid-cols-3 gap-6  lg:gap-10 max-w-6xl mx-auto my-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`card   shadow-lg rounded-lg p-6 flex flex-col items-center text-center  ${
              plan.name === "Premium"
                ? "bg-blue-50  border-blue-500"
                : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-gray-500">{plan.description}</p>
            <p
              className={`text-3xl font-bold mt-4 ${
                plan.name === "Premium" && "text-primary"
              }`}
            >
              {plan.price}
            </p>
            <ul className="mt-6 space-y-2  ">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center  gap-2">
                  <span className="text-green-500">✔</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`btn  text-white mt-6 ${
                plan.name === "Premium" ? "bg-primary hover:bg-secondary" : "bg-secondary-2 hover:bg-primary"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
