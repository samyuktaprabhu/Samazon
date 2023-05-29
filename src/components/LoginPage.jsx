import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1> Login </h1>
      <label>Email</label>
      <input type="email" />
      <label>Password</label>
      <input type="password" />
      <button onClick={() => navigate("/")}>Login</button>

      <label>No account? Sign up here!</label>
      <button onClick={() => navigate("/signup")}> Sign up</button>
    </>
  );
};
