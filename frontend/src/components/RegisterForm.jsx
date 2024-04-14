import React, { useState } from "react";
import RegisterMessage from "./RegisterMassage";
import { useAuth } from "./AuthContext";

export const RegisterForm = () => {
  const [formError, setFormError] = useState("");
  const { register } = useAuth();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const [userCreated, setuserCreated] = useState(false);

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

    const { error } = await register(formData);

    if (error) {
      setFormError(error);
    } else {
      setuserCreated(true);
    }
  };

  return (
    <div>
      {userCreated ? (
        <RegisterMessage isSuccess={true} />
      ) : (
        <div>
          <h1>Register Form</h1>
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
              Register
            </button>
            <p>{formError}</p>
          </form>
        </div>
      )}
    </div>
  );
};
export default RegisterForm;
