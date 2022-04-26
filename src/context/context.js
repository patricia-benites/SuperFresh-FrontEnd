import { createContext, useState, useEffect } from "react";
import { client } from "../client";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const saveToken = (token) => {
    localStorage.setItem("token", `Bearer ${token}`);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  const signup = async (firstName, lastName, email, password) => {
    const response = await client.post("/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    if (response.status === 200) {
      navigate("/login");
    }
  };

  const login = async (email, password) => {
    try {
      const response = await client.post("/auth/login", {
        email,
        password,
      });
      saveToken(response.data.token);
      setUser(response.data.user);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const verify = async () => {
    try {
      const response = await client.get("/auth/verify");
      setUser(response.data.user);
      navigate("/home");
    } catch (error) {
      navigate("/home");
    }
  };

  const logout = () => {
    deleteToken();
    setUser(null);
    navigate("/home");
  };

  useEffect(() => {
    verify();
  },[]);

  const value = {
    user,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
