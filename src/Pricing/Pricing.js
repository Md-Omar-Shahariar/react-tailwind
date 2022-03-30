import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOption = [
    { id: 1, name: "Free", price: 0 },
    { id: 2, name: "Regular", price: 9.99 },
    { id: 3, name: "Premium", price: 19.19 },
  ];
  return (
    <div className="bg-indigo-200 p-4 mt-4">
      <h1 className="text-6xl font-mono text-white">Best Deals Of The Town</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        distinctio, soluta quos, totam obcaecati praesentium maiores sed
        repellat, hic veritatis aliquam. Alias recusandae debitis quod enim qui
        commodi aut temporibus deleniti ut quaerat iusto, cumque dolorum,
        ratione, harum voluptatibus voluptates?
      </p>
      <div className="grid md:grid-cols-3 gap-3 mt-8">
        {pricingOption.map((option) => (
          <PricingOption option={option} key={option.id}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
