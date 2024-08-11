import { useEffect, useState } from "react";
import axios from "axios";

const useHandleOnChangeForSearchRestroFoodNameCuisin = ({ value }) => {
  const [data, setData] = useState([]);
  console.log(value);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/findFoodRestutantAndcuisine?value=${value}`);
        setData(response.data);
        console.log()
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchApi();

  }, [value]);

  return data;
};

export default useHandleOnChangeForSearchRestroFoodNameCuisin;