import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  error: "",
  userList: [],
  onLogout: () => {},
  onLogin: (email, password) => {},
  onError: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userList, SetUserList] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const listUser = [
      { email: "ranadheermuskula@gmail.com", password: "Hyderabad@1234" },
    ];
    SetUserList(listUser);
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const ErrorHandler = () => {
    setError("");
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    const user = userList.find((value) => {
      return value.email === email;
    });
    if (!user) {
      setError("User not found");
      return;
    }
    if (user.password !== password) {
      setError("password is incorrect");
      return;
    }

    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        error: error,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onError: ErrorHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
