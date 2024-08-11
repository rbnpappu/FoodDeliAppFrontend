import React from "react";
import FindThePlaceForGooglePlace from "./FindThePlaceForGooglePlace";


const SearchBar = () => {
  return (
    <div className="bg-white flex flex-col w-[555px] h-[55px] items-center rounded-[11px] m-[18px]">
      <div className="flex w-full">
    
          <FindThePlaceForGooglePlace />

        {/* <FindSearchRestrutantCusineAndFoodName/> */}
      </div>
     
    </div>
  );
};

export default SearchBar;
