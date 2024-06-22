import React, { createContext, useState, useContext } from "react";

export const CreateUserAccountContext = createContext({
  userInfo: {
    userName: "",
    email: "",
    password: "",
    retypePassword: ""
  },
  setUserInfo: () => {}
});

export const useUserContext = () => {
  return useContext(CreateUserAccountContext);
};

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
    retypePassword: ""
  });

  return (
    <CreateUserAccountContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </CreateUserAccountContext.Provider>
  );
};
