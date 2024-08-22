"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginUserApi, fetchUserProfileApi } from "../app/api/Auth"; // Adjust the import path based on your folder structure

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if we're in the browser and localStorage is available
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        setAuthToken(storedToken);
      }
    }
  }, []);

  const login = async (username, password) => {
    try {
      const data = {
        username,
        password,
      };
      const response = await loginUserApi(data);

      let authToken = response?.data?.data?.token;
      setAuthToken(authToken);

      localStorage.setItem("authToken", authToken);

      return authToken;
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure (e.g., show error message)
    }
  };

  const logout = async () => {
    setAuthToken(null);
    localStorage.removeItem("authToken");
    router.push("/sign-in");
  };

  const fetchProfile = async () => {
    try {
      const response = await fetchUserProfileApi();
      // console.log("profile:", response);
      if (response?.status === 200) {
        setUser(response?.data?.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("fetch profile failed:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
