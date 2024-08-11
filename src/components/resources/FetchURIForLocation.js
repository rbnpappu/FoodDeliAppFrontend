import { useState, useCallback } from "react";
import axios from "axios";
import useDebounceEffect from './DeBounce';

const FetchURIForLocation = (userInput) => {
    const [userLocation, setUserLocation] = useState([]);  // State to hold fetched location data
    const [loading, setLoading] = useState(false); // Loading state to manage API request status
    const [error, setError] = useState(""); // State to hold error message
    

    const fetchUri = useCallback(async () => {
        if (userInput !== "") {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:8080/places/${userInput}`);
                setUserLocation(response.data); // Assuming response.data is an array
            } catch (error) {
                console.error("Error fetching data:", error);
                setUserLocation([]); // Clear state or handle error state
                setError(error.message || "Error fetching data");
            } finally {
                setLoading(false);
            }
        }

        if(userInput===""){
        setUserLocation([]);
        }
    }, [userInput]);

    useDebounceEffect(fetchUri, 200, [userInput]);


    return { userLocation, loading, error };
};

export default FetchURIForLocation;
