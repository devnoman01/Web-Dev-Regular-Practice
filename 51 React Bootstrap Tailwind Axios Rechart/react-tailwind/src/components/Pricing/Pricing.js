import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOption = [
    {
      id: 1,
      name: "Free",
      price: 0,
      benefits: [
        "Awesome Design",
        "Color Combination",
        "Light Mode",
        "Email Support",
      ],
    },
    {
      id: 2,
      name: "Regular",
      price: 9.99,
      benefits: [
        "Everything on Free",
        "Cross Platform",
        "Dark Mode",
        "7 Day Data Backup",
        "Live Chat Support",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.99,
      benefits: [
        "Everything on Regular",
        "Live Remote Support",
        "30 Day Data Backup",
        "Personal Plan Support",
        "Amazing Offers",
      ],
    },
  ];
  return (
    <div className="bg-indigo-400 p-4 mt-8 font-semibold">
      <h1 className="text-3xl text-white">Best Deals of the Town</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {pricingOption.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
