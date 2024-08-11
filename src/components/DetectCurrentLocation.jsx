import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

const DetectCurrentLocation = ({handleFindCurrentUserLocation}) => {
    return (
        <div className="w-full flex items-center h-10" onClick={handleFindCurrentUserLocation}>
            <FontAwesomeIcon icon={faLocation} className="text-red-500 text-lg mr-2 transform" />
            <div>
                <span className="text-lg text-red-500 flex items-center">Current Location</span>
                <span className="flex text-gray-600 text-xs">Using GPS</span>
            </div>
        </div>
    );
}

export default DetectCurrentLocation;
