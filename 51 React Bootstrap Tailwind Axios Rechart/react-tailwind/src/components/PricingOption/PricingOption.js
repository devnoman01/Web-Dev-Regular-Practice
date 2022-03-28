import React from "react";
import Benefits from "../Benefits/Benefits";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 rounded-md text-2xl py-2 font-semibold">
        {name}
      </h2>
      <p className="my-5">
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl text-gray-500 mt">$/mo</span>
      </p>
      <div>
        <h3 className="text-xl text-left">Benefits:</h3>
        {benefits.map((benefit) => (
          <Benefits benefit={benefit}></Benefits>
        ))}
      </div>
      <button className="bg-green-500 font-semibold flex justify-center items-center w-full py-2 mt-5 rounded-md hover:text-white duration-150 ease-in">
        Buy Now
        <ArrowCircleRightIcon className="w-6 h-6 ml-2"></ArrowCircleRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
