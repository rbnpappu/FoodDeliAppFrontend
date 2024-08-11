import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Chevron = ({ toggle }) => {

  return (
    <div className="text-black">
      {toggle.current ? (
        <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: '10px', marginBottom: '5px' }} />
      ) : (
        <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '10px', marginBottom: '5px' }} />
      )}
    </div>
  );
};

export default Chevron;
