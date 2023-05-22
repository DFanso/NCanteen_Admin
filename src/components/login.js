import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import axios from "axios"; // Import axios for HTTP requests

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate login credentials
    try {
      const response = await axios.post(
        "http://159.89.203.249:2001/api/canteen/login",
        {
          // Replace 'http://your_backend_api_url/login' with the correct API URL
          username: email,
          password: password,
        }
      );

      // Store the token in local storage or a cookie, depending on your preference
      localStorage.setItem("token", response.data.token);

      // if valid, redirect to dashboard
      history.push("/dashboard");
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Login failed:", error.response.data.message);
      alert("Incorrect username or password"); // Show an alert for incorrect login credentials
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-heading">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
