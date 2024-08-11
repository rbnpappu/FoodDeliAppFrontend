import React from "react";
import NavBarFoodDeli from "./NavBarFoodDeli";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="w-full h-[225px] sm:h-[150px] md:h-[225px] lg:h-[300px] bg-landing-image-desktop bg-cover bg-center relative">
      <div className="flex items-center justify-center bg-transparent p-4 sm:p-6 md:p-8 lg:p-10">
        <NavBarFoodDeli />
      </div>

      <div className="flex flex-col items-center justify-center text-white text-center z-10">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          FoodDeliApp
        </h1>
        <SearchBar className="mt-4" />
      </div>
    </div>
  );
};

export default Header;
