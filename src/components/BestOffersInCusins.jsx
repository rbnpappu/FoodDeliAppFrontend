import React, { useState } from "react";
import Cuisines from "../components/resources/Cuisines.json"; // Adjust path as per your file structure

const BestOffersInCusins = () => {
  const { cuisines } = Cuisines; // Assuming Cuisines.json has an object with a 'cuisines' array
  const limit = 20;
  const [viewListOfAllItems, setViewListOfAllItems] = useState(false);

  const toggleView = () => {
    setViewListOfAllItems(!viewListOfAllItems);
  };

  return (
    <div className="flex flex-col">
      <label className="text-2xl text-black font-light p-4">
        Best Offers In Cuisines
      </label>
      <div className="flex flex-wrap w-full justify-center align-center">
        {cuisines.slice(0, viewListOfAllItems ? cuisines.length : limit).map((cuisine, index) => (
          <div key={index} className="flex justify-center p-3">
            <button className="bg-transparent rounded-lg p-2 border border-solid">
              {cuisine}
            </button>
          </div>
        ))}
        {cuisines.length > limit && (
          <button className="bg-transparent rounded-lg p-2" onClick={toggleView}>
            {viewListOfAllItems ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default BestOffersInCusins;
