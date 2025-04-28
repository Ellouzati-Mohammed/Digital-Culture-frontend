import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);
  const [Full_Name, setFull_Name] = useState(null);
  const [loading, setLoading] = useState(true); // Ici

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedRole = localStorage.getItem("authRole");
    const storedEmail = localStorage.getItem("authEmail");
    const storedFullName = localStorage.getItem("authFull_Name");

    if (storedToken) {
      setToken(storedToken);
      setRole(storedRole);
      setEmail(storedEmail);
      setFull_Name(storedFullName);
    }

    setLoading(false); // Important
  }, []);

  const login = (data) => {
    setToken(data.token);
    setRole(data.user.role);
    setEmail(data.user.email);
    setFull_Name(data.user.Full_Name);

    localStorage.setItem("authToken", data.token);
    localStorage.setItem("authRole", data.user.role);
    localStorage.setItem("authEmail", data.user.email);
    localStorage.setItem("authFull_Name", data.user.Full_Name);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    setEmail(null);
    setFull_Name(null);

    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ token, role, email, Full_Name, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
