import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => "",
  saveUser: (userData) => {},
})

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [infoUser, setInfoUser] = useState("");

  const getAccessToken = () => {
    return accessToken;
  };
  const saveUser = (userData) => {
    console.log(userData.body)
    const { accessToken, refreshToken, firstName, lastName, email } = userData.body.user;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    localStorage.setItem("token", JSON.stringify(refreshToken));
    setInfoUser({ firstName, lastName, email });
    setIsAuthenticated(true);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, getAccessToken, saveUser, infoUser, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
