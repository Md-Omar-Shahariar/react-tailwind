import { CheckIcon } from "@heroicons/react/solid";
import React from "react";

const PricingOption = (props) => {
  const { name, price } = props.option;

  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-100 py-2 rounded text-xl">{name}</h2>
      <p>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div>
        <h3 className="text-xl font-bold text-left">Benefits: </h3>
        <p className="flex items-center">
          <CheckIcon className="w-4 h-4 text-green-500 mr-2"></CheckIcon>
          Awesome Features
        </p>
      </div>
    </div>
  );
};

export default PricingOption;
