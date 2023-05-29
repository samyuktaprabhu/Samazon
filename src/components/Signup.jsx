import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>SIGN UP</h1>
      <label>First Name</label>
      <input type="text" />
      <label>Last Name</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Password</label>
      <input type="password" />
      <label>Confirm Password</label>
      <input type="password" />
      <button onClick={() => navigate("/login")}>Sign up!</button>
    </>
  );
};
