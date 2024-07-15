import React, { useState, useEffect } from "react";
import Account from "./Account";
import { useAuth } from "./AuthContext";

export const LoginForm = () => {
  const { login } = useAuth();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformData((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError("Invalid email");
      return;
    }

    const { error } = await login(formData);

    if (error) {
      setFormError(error);
    } else {
      setisLoggedIn(true);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Account />
      ) : (
        <div className=" w-100">
          <h1>Login Form</h1>
          <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              className="border border-neutral-500 py-1 px-2 rounded "
              type="text"
              placeholder="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="border border-neutral-500 py-1 px-2 rounded"
              type="password"
              placeholder="password"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              className="bg-green-700 text-white rounded py-1"
              type="submit"
            >
              Login
            </button>
            <p>{formError}</p>
          </form>
          <div>
            <p>Don't have an account?</p>
            <a
              className="text-blue-800 hover:text-blue-500"
              href="/auth/register"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </>
  );
};
export default LoginForm;
