import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useUserContext } from "../context/user-context";

const ButtonComponent = () => {
  const { userInfo } = useUserContext();
  const [disable, setDisable] = useState(true); // Start with the button disabled

  useEffect(() => {
    // Use useEffect to update disable state whenever userInfo changes
    let isEmpty = false;

    for (let key in userInfo) {
      if (!userInfo[key]) {
        isEmpty = true;
        break; // Exit loop early if any field is empty
      }
    }

    setDisable(isEmpty); // Update disable state based on whether any userInfo field is empty
  }, [userInfo]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Log userInfo
    console.log(JSON.stringify(userInfo));


    // Add additional logic for form submission if needed
    // For example, you can submit data to an API or perform further processing
  };

  return (
    <Button
      variant="contained"
      size="large"
      type="submit" // This is important if you want to submit the form
      className="btn"
      onClick={handleSubmit}
      disabled={disable} // Corrected attribute name to 'disabled'
    >
      Register
    </Button>
  );
};

export default ButtonComponent;
