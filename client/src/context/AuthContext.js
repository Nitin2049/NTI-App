import { createContext, useContext, useEffect, useState } from "react";
import { googleLogout } from "@react-oauth/google";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // NEW: Track loading

  // Restore session from sessionStorage
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // Done checking session
  }, []);

  const login = (userData) => {
    sessionStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    console.log("User logged in:", userData);
  };

  const logout = () => {
    googleLogout();
    console.log("User logged out");
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the context
export const useAuth = () => useContext(AuthContext);
