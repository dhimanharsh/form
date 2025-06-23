import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
function Login() {
  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...Login };
    copyLoginInfo[name] = value;
    setLogin(copyLoginInfo);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = Login;
    if (!email || !password) {
      return handleError("All are required...");
    }
    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Login),
      });
      const res = await response.json();
      console.log("Status:", response.status);
      console.log("Response body:", res);
      const { success, message, jwtToken, name } = res;
      localStorage.setItem("token", jwtToken);
      localStorage.setItem("loggedInUser", name);
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else if (!success) {
        handleError(message);
      }
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleLogin}>
          <h1>LOGIN</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="Enter your password..."
            />
          </div>
          <button className="signup-btn" type="submit">
            Login
          </button>
          <span className="login-link">
            Doesn't have an account? <Link to="/Signup">Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
