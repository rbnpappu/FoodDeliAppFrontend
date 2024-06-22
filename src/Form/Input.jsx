import React, { useState, useContext } from "react";
import { TextField, FormControl, FormHelperText } from "@mui/material";
import { CreateUserAccountContext } from "../context/user-context";



const Input = ({ name, children, className }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { userInfo, setUserInfo } = useContext(CreateUserAccountContext);



  const handleChange = (event) => {
    const value = event.target.value.trim();

    switch (children) {
      case "UserName":
        const userNameRegex = /^[a-zA-Z\s\d]{3,}$/i;
        if (!value) {
          setErrorMessage("");
          setError(false);
        } else if (!userNameRegex.test(value)) {
          setError(true);
          setErrorMessage(
            "Please type a correct UserName (only letters, 3-16 characters)."
          );
        } else {
          setErrorMessage("");
          setError(false);
          setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            userName: value,
          }));
        }
        break;

      case "Email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value) {
          setErrorMessage("");
          setError(false);
        } else if (!emailRegex.test(value)) {
          setErrorMessage("Please type a correct Email address.");
          setError(true);
        } else {
          setErrorMessage("");
          setError(false);
          setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            email: value,
          }));
        }
        break;

      case "Password":
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/;
        if (!value) {
          setErrorMessage("");
          setError(false);
        } else if (!passwordRegex.test(value)) {
          setErrorMessage(
            "Please type a Password in the correct format (e.g., SecureP@ssw0rd)."
          );
          setError(true);
        } else {
          setErrorMessage("");
          setError(false);
          setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            password: value,
          }));
        }
        break;

      case "Retype Password":

        if (value !== userInfo.password) {
          setErrorMessage("Passwords do not match. Please retype correctly.");
          setError(true);
        } else {
          setErrorMessage("");
          setError(false);
          setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            retypePassword: value,
          }));
        }
        break;

      default:
        setErrorMessage("");
        setError(false);
        break;
    }
  };

  const id = `${name}-${Math.floor(Math.random() * 10000)}`;

  let textField = <TextField
  id={id}
  error={error}
  label={!error ? children : "Error"}
  variant="standard"
  onChange={handleChange}
/>


  if((children === "Password")||(children==="Retype Password")){
    textField = <TextField
    id={id}
    error={error}
    label={!error ? children : "Error"}
    variant="standard"
    type="password"
    onChange={handleChange}
    
  />
  }


  return (
    <div className={className}>
      <FormControl fullWidth>
        {textField}
        <FormHelperText error={error}>{errorMessage}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Input;
