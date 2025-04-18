// src/hooks/useAuth.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  const login = (data) => {
    setToken(data.token);
    setRole(data.user.role);
    // tu peux aussi sauvegarder dans localStorage si tu veux persister
    localStorage.setItem("authToken", data.token);
    localStorage.setItem("authRole", data.user.role);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("authRole");
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
