import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Input from "./Input";
import { UserProvider } from "../context/user-context";
import { useUserContext } from "../context/user-context";
import '../styles/FormStyle.css';
import ButtonComponent from "./ButtonComponen";

const Form = () => {
  const { userInfo } = useUserContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo); // Log the current userInfo object
    // Handle form submission logic here
  };

  return (
    <UserProvider>
      <div className="container">
        <AccountCircleIcon className="form-userIcon" />
        <form className="form" onSubmit={handleSubmit}>
          <Input name="UserName" className="inputBox" id="UserName">
            UserName
          </Input>
          <Input name="Email" className="inputBox" id="Email">
            Email
          </Input>
          <Input name="Password" className="inputBox" id="Password">
            Password
          </Input>
          <Input name="Retype Password" className="inputBox" id="RetypePAssword">
            Retype Password
          </Input>
        
         <ButtonComponent/>
        </form>
      </div>
    </UserProvider>
  );
};

export default Form;
