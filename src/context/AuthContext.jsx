// src/context/AuthContext.js
import React, { createContext, useState, useContext } from "react";

// AuthContext 생성
const AuthContext = createContext();

// AuthContextProvider 컴포넌트 생성
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth 커스텀 훅 생성
export const useAuth = () => useContext(AuthContext);
