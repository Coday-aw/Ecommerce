import { set } from "mongoose";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      if (token) return;

      const userToken = localStorage.getItem("token");

      if (userToken) {
        setToken(userToken);
      }
    };
    getToken();
  }, []);

  const register = async (formData) => {
    try {
      const res = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log({ res, data });
      if (res.status !== 201) {
        return { error: data.message };
      }

      setToken(data.token);
      localStorage.setItem("token", data.token);
      return { success: true };
    } catch (error) {
      console.log(error.message);
      return { error: error.message };
    }
  };

  const login = async (formData) => {
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log({ res, data });
      if (res.status !== 200) {
        return { error: data.message };
      }

      setToken(data.token);
      localStorage.setItem("token", data.token);
      return { success: true };
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  };

  const Logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const value = { token, setToken, register, Logout, login };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
