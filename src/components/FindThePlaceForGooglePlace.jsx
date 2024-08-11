import React, { useState, useEffect, useRef } from "react";
import FetchURIForLocation from "./resources/FetchURIForLocation";
import userSessionStorage from "./resources/StoreSearch";
import Chevron from "./Chevron";
import ListsMap from "./ListsMap";
import DetectCurrentLocation from "./DetectCurrentLocation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useHandleOnChangeForSearchRestroFoodNameCuisin from './customHooksForHandleAPis/useHandleOnChangeForSearchRestroFoodNameCuisin.jsx';

const FindThePlaceForGooglePlace = () => {
  const [input, setInput] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [isRecentSearch, setRecentSearch] = useState(true);
  const [storedSearchKeys, setStoredSearchKeys] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const toggleCaret = useRef(visibility);
  const { userLocation, loading, error } = FetchURIForLocation(input);
  const { storedData, getData } = userSessionStorage();

  const [searchValue, setSearchValue] = useState("");

  // Use the custom hook, passing the current search value
  const searchedDataForFoodRestCuisine = useHandleOnChangeForSearchRestroFoodNameCuisin({ value: searchValue });
  console.log(searchedDataForFoodRestCuisine);
  
  const handleOnChangeForSearchRestroFoodNameCuisin = (event) => {
    setSearchValue(event.target.value);
  };

  const newRef = useRef(null);

  const handleFindCurrentUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            const response = await fetch(url);
            const data = await response.json();
            const cityName = data.address.city || data.address.town || data.address.village || data.display_name;
            const lat = latitude;
            const lng = longitude;

            const newLocation = { cityName, lat, lng };

            setInput(cityName);
            setVisibility(false);
            const key = storedData(newLocation);
            setStoredSearchKeys((prevKeys) => [...prevKeys, key]);
          } catch (error) {
            console.error('Error fetching current location:', error);
          }
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    if (input === "") {
      toggleCaret.current = false;
    }
  }, [input]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (newRef.current && !newRef.current.contains(e.target)) {
        setVisibility(false);
        toggleCaret.current = !visibility;
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [visibility]);

  const onChange = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);

    if (inputValue) {
      setVisibility(true);
      setRecentSearch(false);
    } else {
      setVisibility(false);
      setRecentSearch(true);
    }
  };

  const handleItemClick = (item) => {
    setInput(item.cityName);
    const key = storedData(item);
    setStoredSearchKeys((prevKeys) => [...prevKeys, key]);
    setVisibility(false);
  };

  const handleSearchBoxClick = async () => {
    if (input === "") {
      setVisibility(!visibility);
      setRecentSearch(true);
      toggleCaret.current = !visibility;
      const dataPromises = storedSearchKeys.map((key) => getData(key));
      const dataResults = await Promise.all(dataPromises);
      setSearchedData(dataResults);
    }
  };

  const handleOnClickForSearchRestroFoodNameCuisine = () => {
    setVisibility(false);
  };

  return (
    <div
      className="flex justify-center items-center flex-col w-full m-[15px]"
      ref={newRef}
    >
      <div className="flex bg-transparent w-full flex-wrap p-[3px]">
        <div className="flex justify-space">
          <input
            type="text"
            placeholder="Enter location..."
            value={input}
            onChange={onChange}
            onClick={handleSearchBoxClick}
            className="focus:outline-none border-none rounded-md text-black w-full bg-transparent"
          />
          <Chevron toggle={toggleCaret} />
          <hr className="border-t border-black text-gray-400" />
          <div className="flex w-full justify-space">
            <FontAwesomeIcon icon={faSearch} className="p-1 mb-1 m-0.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or dish"
              className="focus:outline-none border-none rounded-md text-black bg-transparent w-[268px]"
              onClick={handleOnClickForSearchRestroFoodNameCuisine}
              onChange={handleOnChangeForSearchRestroFoodNameCuisin}
            />
          </div>
        </div>
        <div className="z-10 flex">
          {visibility && (
            <div
              className="bg-white rounded-lg p-4 mt-[15px] flex flex-col cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out overflow-y-auto min-h-[55px] max-h-[16rem] z-10 text-black"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            >
              {isRecentSearch ? (
                <div className="flex flex-col">
                  <DetectCurrentLocation
                    handleFindCurrentUserLocation={handleFindCurrentUserLocation}
                  />
                  {searchedData.length > 0 && (
                    <>
                      <ListsMap
                        data={searchedData}
                        handleItemClick={handleItemClick}
                      />
                    </>
                  )}
                </div>
              ) : (
                <ListsMap data={userLocation} handleItemClick={handleItemClick} />
              )}
              {loading && <div>Loading...</div>}
              {error && <div>Error: {error.message}</div>}
            </div>
          )}
          <div>
            <ul>
              {searchedDataForFoodRestCuisine.map((item, index) => (
                <li key={index} className="flex items-center py-2" onClick={() => handleItemClick(item)}>
                  <span className="ml-2">{item.name}</span>
                  <img src={item.image} alt={item.name} className="w-1/5 h-1/5" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindThePlaceForGooglePlace;
